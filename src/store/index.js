import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import horoscopeReducer from "../features/horoscope";

export const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: { horoscope: horoscopeReducer },
  middleware: [saga],
});
