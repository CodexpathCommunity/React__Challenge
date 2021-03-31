export const inintialState = {
  adminMode: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE__ADMIN":
      return {
        ...state,
        adminMode: action.adminState,
      };

    default:
      return state;
  }
};

export default reducer;
