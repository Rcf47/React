import "./Die.css";

function Die(props) {
  return (
    <div className={`field ${props.active && "active"}`}>
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
}

export default Die;
