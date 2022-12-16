import "./SignView.css";

import { useSelector, shallowEqual } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { selectSelectedSign } from "../../selectors";
import { EmptySign } from "../../models/no-sign-selected";
import { OPTIONS } from "../../utils/constants";

const SignView = () => {
  const sign = useSelector(selectSelectedSign, shallowEqual);
  const [selectedOption, setSelectedOption] = useState(OPTIONS[0].value);
  const history = useHistory();

  //todo try to use more functional components
  if (!sign) {
    return <EmptySign />;
  }

  return (
    <>
      <div className="app-signview-container">
        <div className="app-signview-image-container">
          <img
            className="app-signview-image"
            src={sign?.signImage}
            alt={sign?.signName || ""}
          />
        </div>
        <p id="app-signview-name">{sign?.signName}</p>
        <div className="app-signview-button-container">
          {OPTIONS.map((option) => (
            <button
              className={
                selectedOption === option.value
                  ? "app-signview-ActiveButton"
                  : "app-signview-button"
              }
              key={option.value}
              onClick={() => {
                setSelectedOption(option.value);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
        <div className="app-signvire-description-container">
          <p id="app-signview-description">{sign[selectedOption]}</p>
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
