export default async function getCity(city) {
  try {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2d1071d2a640b454a941894654415839`);
    const json = await data.json();
  
    // console.log(json);
    return json; 
  } catch (error) {
    console.log(error);
  }
}