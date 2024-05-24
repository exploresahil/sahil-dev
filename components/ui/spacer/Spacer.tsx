import Star from "../svg/Star";
import "./style.scss";

const Spacer = () => {
  return (
    <div id="spacer">
      <div className="line" />
      <Star />
      <div className="line" />
    </div>
  );
};

export default Spacer;
