import {
  Await,
  Link,
  defer,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import { getVans } from "../../api";
import { Suspense } from "react";

export function loader() {
  return defer({ vans: getVans() });
}
export function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const vansPromise = useLoaderData();

  const typeFilter = searchParams.get("type");

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  function renderVansElements(vans) {
    const displayedVans = typeFilter
      ? vans.filter((van) => van.type === typeFilter)
      : vans;
    const vanElements = displayedVans.map((van) => {
      return (
        <div key={van.id} className="van-tile">
          <Link to={van.id} state={{
            search: `?${searchParams.toString()}`,
            type: typeFilter
          }}>
            <img src={van.imageURL} />
            <div className="van-info">
              <h3>{van.name}</h3>
              <p>
                ${van.price}
                <span>/day</span>
              </p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
          </Link>
        </div>
      );
    });
    return (
      <>
        <div className="van-list-filter-buttons">
          <button
            className={`van-type simple ${typeFilter === "simple" ? "selected" : ""
              }`}
            onClick={() => handleFilterChange("type", "simple")}
          >
            Simple
          </button>
          <button
            className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""
              }`}
            onClick={() => handleFilterChange("type", "luxury")}
          >
            Luxury
          </button>
          <button
            className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""
              }`}
            onClick={() => handleFilterChange("type", "rugged")}
          >
            Rugged
          </button>
          {typeFilter ? (
            <button
              className="van-type clear-filters"
              onClick={() => handleFilterChange("type", null)}
            >
              Clear filters
            </button>
          ) : null}
        </div>
        <div className="van-list">{vanElements}</div>
      </>
    );
  }

  return (
    <div className="van-list-container">
      <h1>Exploure our van options</h1>
      <Suspense fallback={<h2>Loading vans...</h2>}>
        <Await resolve={vansPromise.vans}>{renderVansElements}</Await>
      </Suspense>
    </div>
  );
}
