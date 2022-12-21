const initialState = { friends: [] }
const action = {
  type: "friends/add",
  payload: {
    name: "Chrome Boi",
    homewtown: "NYC",
    id: 1
  }
}

export function manageFriends(state = initialState, action) {
  // your code here
  switch (action.type) {
    case "friends/add":
      return { ...state, friends: state.friends.push(action.payload)};
  
    case "friends/remove":
      return { ...state, friends: state.friends.filter(friend => {return friend.id !== action.payload}) };
    default:
      return state;
  }
}
