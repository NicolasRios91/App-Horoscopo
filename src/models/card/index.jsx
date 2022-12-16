import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updatedSign } from "../../features/horoscope";

export const Card = ({ sign }) => {
  const { signName, signImage } = sign;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(updatedSign(sign));
    history.push("/sign");
  };

  return (
    <div className="app-card-container">
      <div className="app-card" onClick={handleOnClick}>
        <img className="app-card-image" src={signImage} alt={signName} />
      </div>
      <label htmlFor="" className="app-card-label">
        {signName}
      </label>
    </div>
  );
};
