export default async function getCity(city) {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6a7979c3afb2967d1e2ba808e3b39ffc`);
  const json = await data.json();
  
  return json;
}