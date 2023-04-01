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
      <img src={` ../src/assets/${props.coverImg}`} className="card__photo" />
      <div className="card__rating">
        <img src="../src/assets/Star.png" className="card__star" />
        <span>{props.stats.rating}</span>
        <span>({props.stats.reviewCount}) • </span>
        <span>{props.location}</span>
      </div>
      <p className="card__text">{props.title}</p>
      <p className="card__price">From ${props.price} / <span>person</span></p>
    </div>
  );
}


export default Card;
