import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_DATA_SIGN } from "../actions";
import { useSelector } from "react-redux";

const Card = ({ sign }) => {
  const data = useSelector((state) => state.dataReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <>
      <div className="app-card-container">
        <div
          className="app-card"
          onClick={() =>
            data.forEach((e) => {
              if (e.nombre === sign.signName) {
                dispatch(SET_DATA_SIGN(e));
                history.push("/sign");
              }
            })
          }
        >
          <img className="app-card-image" src={sign.image} alt="image" />
        </div>

        <label htmlFor="" className="app-card-label">
          {sign.signName}
        </label>
      </div>
    </>
  );
};

export default Card;
