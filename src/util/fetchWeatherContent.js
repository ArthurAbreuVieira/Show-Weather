export default async function fetchWeatherContent(lat,lon) {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=6d50e3b0fee937bf00a5e425b2d4e2bf`);
  const json = await data.json();
  
  return json;
}