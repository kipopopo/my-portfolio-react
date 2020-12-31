export const introAlwaysTrue = () => {
  return {
    type: "INTRO_ALWAYS_TRUE",
  };
};

export const introAlwaysFalse = () => {
  return {
    type: "INTRO_ALWAYS_FALSE",
  };
};

export const introToggle = () => {
  return {
    type: "INTRO_TOGGLE",
  };
};
