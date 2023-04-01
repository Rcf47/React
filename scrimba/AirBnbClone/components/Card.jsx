import "./Card.css";

function Card(props) {
  let textBadge
  if (props.openSpots === 0) {
    textBadge = "SOLD OUT"
  } else if (props.location === 'Online') {
    textBadge = "Online"
  }
  return (
    <div className="card__body">
      {textBadge && <div className="card__label" >{textBadge}</div>}
      <img src={` ../src/assets/${props.img}`} className="card__photo" />
      <article className="card__description">
        <div className="card__rating">
          <img src="../src/assets/Star.png" className="card__star" />
          <span>{props.rating}</span>
          <span>({props.reviewCount}) • </span>
          <span>{props.location}</span>
        </div>
        <p className="card__text">{props.title}</p>
        <p className="card__price">From ${props.price} / <span>person</span></p>
      </article>
    </div>
  );
}


export default Card;
