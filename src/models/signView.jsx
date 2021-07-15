import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import imagesArray from "../utils/images";
import { useHistory } from "react-router-dom";

const SignView = () => {
  const sign = useSelector((state) => state.dataSignReducer);
  const history = useHistory();
  const [value, setValue] = useState(sign.amor);
  const image = imagesArray.filter((e) => e.signName === sign.nombre);

  return (
    <div>
      <img src={image[0].image} alt="" />
      <p>{sign.nombre}</p>
      <button onClick={() => setValue(sign.amor)}>Amor</button>
      <button onClick={() => setValue(sign.dinero)}>Dinero</button>
      <button onClick={() => setValue(sign.salud)}>Salud</button>
      <p>{value}</p>
      <br />
      <button onClick={() => history.push("/")}>Volver</button>
    </div>
  );
};

export default SignView;
