import React, { useState, useEffect } from "react";
import Card from "./card";
import imagesArray from "../utils/images";

const CardList = () => {
  return (
    <div className="app-cardList-container">
      {imagesArray.map((e) => {
        return <Card key={e.signName} sign={e}></Card>;
      })}
    </div>
  );
};

export default CardList;
