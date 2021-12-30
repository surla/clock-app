export default async function getTime() {
  try {
    const time = await fetch("http://worldtimeapi.org/api/ip").then(
      (response) => response.json()
    );

    return time;
  } catch (error) {
    console.log("Error: ", error);
  }
}
