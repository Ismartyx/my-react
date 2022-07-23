import GetStart from "../../components/GetStart";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.title}>
        <h1>React</h1>
        <p>A JavaScript library for building user interfaces</p>
      </div>
      <GetStart />
    </div>
  );
};

export default Hero;
