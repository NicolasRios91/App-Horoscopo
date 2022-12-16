import zodiakImg from "../../utils/images/Zodiak.png";
import "./loading.css";

const Loading = () => {
  return (
    <>
      <div className="app-loading-container">
        <div className="app-loading">
          <img className="app-loading-image" src={zodiakImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Loading;
