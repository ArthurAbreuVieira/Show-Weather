export default async function fetchWeatherContent(lat,lon, key) {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${key}`);
  const json = await data.json();
  
  return json;
}