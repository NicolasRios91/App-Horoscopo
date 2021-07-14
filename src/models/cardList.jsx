import Card from "./card";
import imagesArray from "../utils/images";
import { useSelector } from "react-redux";
const CardList = () => {
  const data = useSelector((state) => state.dataReducer);

  return imagesArray.map((e) => {
    return <Card image={e.signo} dinero={data.aries.dinero}></Card>;
  });
};

export default CardList;
