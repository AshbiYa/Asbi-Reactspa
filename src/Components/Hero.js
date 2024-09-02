import "./HeroStyles.css";
function Hero(props) {
  return (
    <div>
      <div className={props.cName}>
        <img alt="bukimg" src={props.heroImg} />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
