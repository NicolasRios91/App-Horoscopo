import "./SignView.css";

import { useSelector, shallowEqual } from "react-redux";
import React, { useState } from "react";
import imagesArray from "../../utils/images";
import { useHistory } from "react-router-dom";
import { selectSelectedSign } from "../../selectors";

const SignView = () => {
  const sign = useSelector(selectSelectedSign, shallowEqual);
  const [isClicked, setIsClicked] = useState(0);
  const history = useHistory();
  const [value, setValue] = useState(sign?.description);
  const image = imagesArray.filter((e) => e.signName === sign?.sign);

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
        <p id="app-signview-name">{sign?.sign}</p>
        <div className="app-signview-button-container">
          <button
            className={
              isClicked === 0
                ? "app-signview-ActiveButton"
                : "app-signview-button"
            }
            onClick={() => {
              setValue(sign.description);
              setIsClicked(0);
            }}
          >
            Daily
          </button>

          <button
            className={
              isClicked === 1
                ? "app-signview-ActiveButton"
                : "app-signview-button"
            }
            onClick={() => {
              //TODO set tab setSelectedTab
              setValue(`Your mood for today: ${sign.mood}`);
              setIsClicked(1);
            }}
          >
            Mood
          </button>

          <button
            className={
              isClicked === 2
                ? "app-signview-ActiveButton"
                : "app-signview-button"
            }
            onClick={() => {
              setValue(`Today's match: ${sign.compatibility}`);
              setIsClicked(2);
            }}
          >
            Matches
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
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default SignView;
