function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_ROUND":
      return {
        ...state,
        round: action.payload,
      };

      case "CHANGE_TEAM":

        console.out("Reducer::ChangeTeam:", action.payload);
        return {
          ...state,
          team: action.payload,
          selected: [],
        };

      case "CHANGE_SELECTED":
        return {
          ...state,
          selected: action.payload,
        };

      case "CHANGE_GUESTS":
        return {
          ...state,
          guests: action.payload,
        };

    default:
      return state;
  }
}

export default reducer;
