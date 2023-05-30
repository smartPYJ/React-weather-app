import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import "./forecast.css";
const WEEK_DAY = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAY.slice(dayInWeek, WEEK_DAY.length).concat(
    WEEK_DAY.slice(0, dayInWeek)
  );

  return (
    <>
      <label className="title"> Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, indx) => (
          <AccordionItem key={indx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt=""
                    className="small-icon"
                  />
                  <label className="days-list"> {forecastDays[indx]}</label>
                  <label className="description">
                    {" "}
                    {item.weather[0].description}{" "}
                  </label>
                  <label className="min-max">
                
                    Min {Math.round(item.main.temp_min)}°C : Max 
                     {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure:</label>
                  <label>{item.main.pressure}Psi </label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity: </label>
                  <label>{item.main.humidity} % </label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea Level:  </label>
                  <label>{item.main.sea_level} m </label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Cloud: </label>
                  <label>{item.clouds.all} </label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind: </label>
                  <label> {item.wind.speed} m/s </label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels Like: </label>
                  <label> {Math.round(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
