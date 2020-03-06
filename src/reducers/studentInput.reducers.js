const reducer = (state, action) => {
  switch (action.type) {
    case "firstName":
      return { firstName: action.payload };
    case "lastName":
      return { lastName: action.payload };
    default:
      return state;
  }
};

export default reducer;