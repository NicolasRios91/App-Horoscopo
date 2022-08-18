import React from "react";
import Card from "./card";
import imagesArray from "../utils/images";

const CardList = () => {
  return (
    <div className="app-cardList-container">
      {imagesArray.map((sign) => {
        return <Card key={sign.signName} sign={sign}></Card>;
      })}
    </div>
  );
};

export default CardList;
