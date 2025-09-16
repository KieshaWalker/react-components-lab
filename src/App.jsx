import { useState } from 'react'

import './components/WeatherForecast/WeatherForecast.css';

const App = () => {

  const weatherForecasts = [
  {
    day: 'Mon',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg',
    imgAlt: 'sun icon',
    conditions: 'sunny',
    time: 'Morning',
  },
  {
    day: 'Tue',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg',
    imgAlt: 'moon icon',
    conditions: 'clear',
    time: 'Night',
  },
  {
    day: 'Wed',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg',
    imgAlt: 'clouds with lightning icon',
    conditions: 'stormy',
    time: 'All Day',
  },
  {
    day: 'Thu',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg',
    imgAlt: 'sun overcast by clouds icon',
    conditions: 'overcast',
    time: 'Evening',
  },
  {
    day: 'Fri',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg',
    imgAlt: 'moon overcast by clouds icon',
    conditions: 'cloudy',
    time: 'Night',
  },];

  const WeatherIcon = ({ img, imgAlt }) => (
    <img src={img} alt={imgAlt} />
  );

  const WeatherData = ({ day, conditions, time }) => (
    <div>
      <h2>{day}</h2>
      <p>{conditions}</p>
      <p>{time}</p>
    </div>
  );

  return (
    <div className='weather'>
      <h1>Local Weather</h1>
      <section>
        {weatherForecasts.map((forecast) => (
          <>
          <span className='weather-icon'><WeatherIcon {...forecast} /></span>
          <span className='weather-data'><WeatherData {...forecast} /></span>
          </>
  
        ))}
      </section>
    </div>
  );
};



export default App;
