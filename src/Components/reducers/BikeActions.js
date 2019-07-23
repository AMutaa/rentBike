export const GET_CITIES = "GET_CITIES";
export const CITY_DETAILS = "GET_DETAILS";

export function getCities() {
  return async function(dispatch) {
    const results = await fetch("https://api.citybik.es/v2/networks");
    const allBikes = await results.json();
    const cities = allBikes.networks.filter(
      item => item.location.country === "US"
    );
    return dispatch({
      type: "GET_CITIES",
      usaCities: cities
    });
  };
}

export function getCityDetails(id) {
  return async function(dispatch) {
    const results = await fetch(`https://api.citybik.es/v2/networks/${id}`);
    const details = await results.json();
    return dispatch({
      type: "CITY_DETAILS",
      cityName: details.network.location.city,
      cityBike: details.network.name,
      stations: details.network.stations,
      longitud: details.network.location.longitude,
      latitude: details.network.location.latitude
    });
  };
}
