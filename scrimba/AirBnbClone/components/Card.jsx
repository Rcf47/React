import "./Card.css";

function Card(props) {
  let textBadge
  if (props.item.openSpots === 0) {
    textBadge = "SOLD OUT"
  } else if (props.item.location === 'Online') {
    textBadge = "Online"
  }
  return (
    <div className="card__body">
      {textBadge && <div className="card__label" >{textBadge}</div>}
      <img src={` ../src/assets/${props.item.coverImg}`} className="card__photo" />
      <article className="card__description">
        <div className="card__rating">
          <img src="../src/assets/Star.png" className="card__star" />
          <span>{props.item.stats.rating}</span>
          <span>({props.item.stats.reviewCount}) • </span>
          <span>{props.item.location}</span>
        </div>
        <p className="card__text">{props.item.title}</p>
        <p className="card__price">From ${props.item.price} / <span>person</span></p>
      </article>
    </div>
  );
}


export default Card;
