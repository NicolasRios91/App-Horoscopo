import { useDispatch } from "react-redux";
import { SET_DATA } from "../actions";

const FecthApi = () => {
  const dispatch = useDispatch();
  return fetch("https://api.adderou.cl/tyaas/")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((dataResponse) => {
      dispatch(SET_DATA([Object.values(dataResponse.horoscopo)][0]));
    })
    .catch((error) => {
      console.log("error", error);
    })
    .finally(setTimeout(() => {}, 1000));
};

export default FecthApi;
