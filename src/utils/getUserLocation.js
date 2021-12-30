export default async function getUserLocation() {
  try {
    const ipInfo = await fetch(
      `https://api.freegeoip.app/json/?apikey=${process.env.REACT_APP_FREEGEOIP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => data);
    return ipInfo;
  } catch (error) {
    console.log("Error:", error);
  }
}
