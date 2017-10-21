export default (state = [], action) => {
  switch (action.type) {
    case "update_user":
      var k = action.key;
      var v = action.value;
      const new_state = {
        ...state
      };
      new_state[k] = v;
      return new_state;
    case "update_user_many":
      return ({
        ...state,
        ...action.data
      });
    default:
      return state;
  }
};
