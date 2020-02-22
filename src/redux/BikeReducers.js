import { GET_CITIES, GET_DETAILS } from "./BikeActions";

const initialState = {
  usaCities: [],
  cityName: "",
  cityBike: "",
  stations: [],
  longitude: "",
  latitude: "",
  name: "",
  loading: true
};

export default function(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case GET_CITIES:
      return {
        ...state,
        usaCities: action.usaCities
      };
    case GET_DETAILS:
      return {
        ...state,
        cityName: action.cityName,
        cityBike: action.cityBike,
        stations: action.stations,
        longitude: action.longitude,
        latitude: action.latitude,
        loading: action.loading
      };
    default:
      return state;
  }
}
