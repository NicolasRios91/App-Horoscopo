import { useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { selectHoroscopeData } from "../../selectors";
import { Card } from "../../models/card";
import "./CardListView.css";
import { selectIsLoading } from "../../selectors";
import { getHoroscopeFetch } from "../../features/horoscope";
import Loading from "../../models/loading";

const CardListView = () => {
  const data = useSelector(selectHoroscopeData, shallowEqual);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
      dispatch(getHoroscopeFetch());
    }
  }, [data, dispatch]);

  if (isLoading) return <Loading />;

  return (
    <>
      <header>
        <h1>HOROSCOPES</h1>
      </header>
      {data?.length ? (
        <div className="app-cardList-container">
          {data.map((sign) => (
            <Card key={sign.signName} sign={sign}></Card>
          ))}
        </div>
      ) : (
        <h3 style={{ textAlign: "center" }}>Sorry, try again later</h3>
      )}
    </>
  );
};

export default CardListView;
