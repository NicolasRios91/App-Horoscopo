import { call, put, takeEvery, delay } from "redux-saga/effects";
import { fetchAllSigns } from "../api";
import { getHoroscopeSuccess } from "../features/horoscope";

function* workGetHoroscopeFetch() {
  try {
    const data = yield call(() => fetchAllSigns());
    //delay to show animation
    yield delay(3500);
    yield put(getHoroscopeSuccess(data));
  } catch (e) {}
}

function* mySaga() {
  yield takeEvery("horoscope/getHoroscopeFetch", workGetHoroscopeFetch);
}

export default mySaga;
