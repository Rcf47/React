//import "./Card.css";
import "./CardFromScrimba.css"

function Card(props) {
  let textBadge
  if (props.openSpots === 0) {
    textBadge = "SOLD OUT"
  } else if (props.location === 'Online') {
    textBadge = "Online"
  }
  return (
    <div className="card">
      {textBadge && <div className="card--badge" >{textBadge}</div>}
      <img src={` ../src/assets/${props.coverImg}`} className="card--image" />
      <div className="card--stats">
        <img src="../src/assets/Star.png" className="card--star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price"><span className="bold">From ${props.price}</span> / <span>person</span></p>
    </div>
  );
}


export default Card;
