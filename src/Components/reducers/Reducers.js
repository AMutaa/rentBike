import { GET_CITIES } from "./Actions";

const initialState = {
  usaCities: []
};

export default function(stat = initialState, action) {
  const { type, usaCities } = action;
  switch (key) {
    case GET_CITIES:
      return {
        ...state,
        usaCities: usaCities
      };

      break;

    default:
      return state;
  }
}
