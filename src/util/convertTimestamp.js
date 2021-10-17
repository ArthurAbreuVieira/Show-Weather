import moment from "moment-timezone";

export default function convertTimestamp(timestamp, operation) {
  const days = [
    {
      en: "Sunday",
      pt: "Domingo"
    },
    {
      en: "Monday",
      pt: "Segunda-Feira"
    },
    {
      en: "Tuesday",
      pt: "Terça-Feira"
    },
    {
      en: "Wednesday",
      pt: "Quarta-Feira"
    },
    {
      en: "Thursday",
      pt: "Quinta-Feira"
    },
    {
      en: "Friday",
      pt: "Sexta-Feira"
    },
    {
      en: "Saturday",
      pt: "Sábado"
    }
  ];

  const date = moment.unix(timestamp).utc();

  if(operation === "add_day") date.add(1, 'days');
  else if(operation === "subtract_day") date.subtract(1, 'days');

  const dateInfo = {
    day: date.tz("America/Sao_Paulo").format("D"),
    month: date.tz("America/Sao_Paulo").format("M"),
    year: date.tz("America/Sao_Paulo").format("YYYY"),
    date: date.tz("America/Sao_Paulo").format("D/M"),
    hour: date.tz("America/Sao_Paulo").format("HH:mm"),
    single_hour: date.tz("America/Sao_Paulo").format("H"), 
    dayOfWeek: date.tz("America/Sao_Paulo").format("dddd"),
    timestamp: date.unix()
  };

  for(day of days) {
    if(day.en === date.tz("America/Sao_Paulo").format("dddd")) {
      dateInfo.dayOfWeek = day.pt;
      break;
    }
  }
  
  return dateInfo;
}