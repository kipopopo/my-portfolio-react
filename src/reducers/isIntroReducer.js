const isIntroReducer = (state = true, action) => {
  switch (action.type) {
    case "INTRO_ALWAYS_TRUE":
      return true;
    case "INTRO_ALWAYS_FALSE":
      return false;
    case "INTRO_TOGGLE":
      return !state;
    default:
      return state;
  }
};
export default isIntroReducer;
