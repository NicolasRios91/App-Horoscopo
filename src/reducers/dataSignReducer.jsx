const dataSignReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_DATA_SIGN":
      return action.payload;
    default:
      return state;
  }
};

export default dataSignReducer;
