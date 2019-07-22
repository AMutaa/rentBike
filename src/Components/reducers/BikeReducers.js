import { GET_CITIES } from "./BikeActions";

const initialState = {
  usaCities: []
};

export default function(state = initialState, action) {
  const { type, usaCities } = action;
  switch (type) {
    case GET_CITIES:
      return {
        ...state,
        usaCities: usaCities
      };
    default:
      return state;
  }
}
