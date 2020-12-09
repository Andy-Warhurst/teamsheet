function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_ROUND":
      return {
        ...state,
        round: action.payload,
      };

    case "CHANGE_TEAM":
      return {
        ...state,
        team: action.payload,
        selected: [],
      };
    case "TOGGLE_PLAYER":
      if (!state.selected.includes(action.payload) && action.extra) {
        state.selected[state.selected.length] = action.payload;
      }
      if (state.selected.includes(action.payload) && !action.extra) {
        var index = state.selected.indexOf(action.payload);
        state.selected.splice(index, 1);
      }
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default reducer;
