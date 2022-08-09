export const increment = (val) => {
  return {
    type: "increment",
    payload: val,
  };
};

export const decrement = (val) => {
  return {
    type: "decrement",
    payload: val,
  };
};
