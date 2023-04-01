import "./Card.css";

function Card(props) {
  return (
    <section className="card__body">
      <label className="card__label" >SOLD OUT</label>
      <img src={`../public/${props.img}`} className="card__photo" />
      <article className="card__description">
        <div className="card__rating">
          <img src="../public/Star.png" className="card__star" />
          <span>{props.rating}</span>
          <span>({props.reviewCount}) • </span>
          <span>{props.location}</span>
        </div>
        <p className="card__text">{props.title}</p>
        <p className="card__price">From ${props.price} / <span>person</span></p>
      </article>
    </section>
  );
}


export default Card;
