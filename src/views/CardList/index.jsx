import React from "react";

import CardList from "../../models/cardList";
import "./CardListView.css";
const CardListView = () => {
  //TODO use effect in carlistView??
  // const data = useSelector((state) => state.dataReducer);
  // !data ? FecthApi() : void 0; //WTF?????

  return (
    <>
      <header>
        <h1>Tu Horóscopo</h1>
      </header>
      <CardList />
    </>
  );
};

export default CardListView;
