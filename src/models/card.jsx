import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_DATA_SIGN } from "../actions";
import { useSelector } from "react-redux";

const Card = ({ sign }) => {
  const data = useSelector((state) => state.dataReducer);
  let newArrayDataOfOjbect = [];
  data
    ? (newArrayDataOfOjbect = Object.values(data))
    : (newArrayDataOfOjbect = []);

  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="app-card">
      <img
        className="app-card-image"
        src={sign.image}
        onClick={() =>
          newArrayDataOfOjbect.forEach((e) => {
            if (e.nombre === sign.signName) {
              dispatch(SET_DATA_SIGN(e));
              history.push("/sign");
            }
          })
        }
        alt="image"
      />
    </div>
  );
};

export default Card;
