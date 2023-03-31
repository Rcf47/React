import "./Card.css";

function Card() {
  return (
    <section className="card__body">
      <img src="../public/katie-zaferes.png" className="card__photo" />
      <article className="card__description">
        <div className="card__rating">
          <img src="../public/Star.png" className="card__star" />
          <span>5.0</span>
          <span>(6)</span>
          <span>USA</span>
        </div>
        <p className="card__text">Life lessons with Katie Zaferes</p>
        <p className="card__price">From $136 / <span>person</span></p>
      </article>
    </section>
  );
}

export default Card;
