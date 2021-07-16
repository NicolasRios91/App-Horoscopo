import "./SignView.css";

import { useSelector } from "react-redux";
import React, { useState } from "react";
import imagesArray from "../utils/images";
import { useHistory } from "react-router-dom";

const SignView = () => {
  const sign = useSelector((state) => state.dataSignReducer);
  const [isClicked, setIsClicked] = useState(0);
  const history = useHistory();
  const [value, setValue] = useState(sign.amor);
  const image = imagesArray.filter((e) => e.signName === sign.nombre);

  return (
    <>
      <div className="app-signview-container">
        <div className="app-signview-image-container">
          <img
            className="app-signview-image"
            src={image[0].signImage}
            alt="zodiac"
          />
        </div>
        {/* TODO CREATE BUTTON COMPONENT ?? */}
        <p id="app-signview-name">{sign.nombre}</p>
        <div className="app-signview-button-container">
          <button
            className={
              isClicked === 0
                ? "app-signview-ActiveButton"
                : "app-signview-button"
            }
            onClick={() => {
              setValue(sign.amor);
              setIsClicked(0);
            }}
          >
            Amor
          </button>

          <button
            className={
              isClicked === 1
                ? "app-signview-ActiveButton"
                : "app-signview-button"
            }
            onClick={() => {
              setValue(sign.dinero);
              setIsClicked(1);
            }}
          >
            Dinero
          </button>

          <button
            className={
              isClicked === 2
                ? "app-signview-ActiveButton"
                : "app-signview-button"
            }
            onClick={() => {
              setValue(sign.salud);
              setIsClicked(2);
            }}
          >
            Salud
          </button>
        </div>
        <div className="app-signvire-description-container">
          <p id="app-signview-description">{value}</p>
        </div>
        <div>
          <button
            className="app-signview-button"
            onClick={() => history.push("/")}
          >
            Volver
          </button>
        </div>
      </div>
    </>
  );
};

export default SignView;
