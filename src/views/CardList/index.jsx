import React from "react";
import { useSelector } from "react-redux";
import CardList from "../../models/cardList";
import "./CardListView.css";
const CardListView = () => {
  const data = useSelector((state) => state.dataReducer);
  //TODO use effect in carlistView??
  // const data = useSelector((state) => state.dataReducer);
  // !data ? FecthApi() : void 0; //WTF?????

  return (
    <>
      <header>
        <h1>Tu Horóscopo</h1>
      </header>
      {data?.length ?<CardList /> : <h3 style={{textAlign: 'center'}}>Error en la aplicacion</h3>}
      
    </>
  );
};

export default CardListView;
