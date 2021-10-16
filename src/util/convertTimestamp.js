import moment from "moment";

export default function convertTimestamp(timestamp) {
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

  const dateInfo = {
    day: date.format("D"),
    month: date.format("M"),
    year: date.format("YYYY"),
    date: date.format("D/M"),
    hour: date.format("HH:mm"),
    dayOfWeek: date.format("dddd"),
  };

  for(day of days) {
    if(day.en === date.format("dddd")) {
      dateInfo.dayOfWeek = day.pt;
      break;
    }
  }

  console.log(dateInfo.dayOfWeek);
  return dateInfo;
}