export const GET_CITIES = "GET_CITIES";

export function getNetworks() {
  return async function(dispatch) {
    const results = await fetch("https://api.citybik.es/v2/networks");
    const allBikes = await results.json();
    const usaCities = allBikes.networks.filter(item => item.location === "US");
    return dispatch({
      type: "GET_CITIES",
      usaCities: usaCities
    });
  };
}
