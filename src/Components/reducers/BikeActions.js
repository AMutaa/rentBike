export const GET_CITIES = "GET_CITIES";

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
