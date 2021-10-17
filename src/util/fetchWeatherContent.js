export default async function fetchWeatherContent(lat,lon) {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=2d1071d2a640b454a941894654415839`);
  const json = await data.json();
  
  return json;
}