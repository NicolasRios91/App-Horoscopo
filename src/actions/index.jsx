export const SET_DATA = (dataResponse) => {
  return {
    type: "SET_DATA",
    payload: dataResponse,
  };
};

export const SET_DATA_SIGN = (data) => {
  return {
    type: "SET_DATA_SIGN",
    payload: data,
  };
};

export const IS_FETCH = (isFetch) => {
  return {
    type: "IS_FETCH",
    payload: isFetch,
  };
};
