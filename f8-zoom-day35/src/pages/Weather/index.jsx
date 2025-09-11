import { useState } from "react";
import styles from "./Weather.module.scss";

const weatherData = {
  hanoi: {
    city: "Hà Nội",
    temp: 28,
    weather: "Sunny",
    humidity: 65,
    wind: "13 km/h",
    rain: "20",
    forecast: [
      { time: "10:00", status: "sunny", temp: 28 },
      { time: "11:00", status: "rain", temp: 20 },
      { time: "12:00", status: "cloud", temp: 23 },
      { time: "13:00", status: "rain", temp: 21 },
    ],
  },
  hochiminh: {
    city: "TP.HCM",
    temp: 32,
    weather: "Cloudy",
    humidity: 78,
    wind: "15 km/h",
    rain: "40",
    forecast: [
      { time: "10:00", status: "cloud", temp: 22 },
      { time: "11:00", status: "sunny", temp: 20 },
      { time: "12:00", status: "rain", temp: 23 },
      { time: "13:00", status: "sunny", temp: 29 },
    ],
  },
  danang: {
    city: "Đà Nẵng",
    temp: 30,
    weather: "Light rain",
    humidity: 82,
    wind: "10 km/h",
    rain: "70",
    forecast: [
      { time: "10:00", status: "sunny", temp: 29 },
      { time: "11:00", status: "cloud", temp: 25 },
      { time: "12:00", status: "sunny", temp: 28 },
      { time: "13:00", status: "rain", temp: 23 },
    ],
  },
  haiphong: {
    city: "Hai Phong",
    temp: 30,
    weather: "Heavy rain",
    humidity: 85,
    wind: "11 km/h",
    rain: "80",
    forecast: [
      { time: "10:00", status: "rain", temp: 20 },
      { time: "11:00", status: "rain", temp: 22 },
      { time: "12:00", status: "rain", temp: 21 },
      { time: "13:00", status: "sunny", temp: 26 },
    ],
  },
  thanhhoa: {
    city: "Thanh Hoa",
    temp: 25,
    weather: "Sunny",
    humidity: 72,
    wind: "18 km/h",
    rain: "30",
    forecast: [
      { time: "10:00", status: "sunny", temp: 26 },
      { time: "11:00", status: "cloud", temp: 23 },
      { time: "12:00", status: "cloud", temp: 24 },
      { time: "13:00", status: "sunny", temp: 27 },
    ],
  },
};

function Weather() {
  const [location, setLocation] = useState("hanoi");
  const [data, setData] = useState(weatherData);

  const randomizeValue = (value) => {
    const delta = value * 0.05; // 5%
    const min = value - delta;
    const max = value + delta;
    return Math.round(Math.random() * (max - min) + min);
  };

  const handleRandom = () => {
    setData((prev) => {
      const newData = { ...prev };
      const loc = newData[location];

      newData[location] = {
        ...loc,
        temp: randomizeValue(loc.temp),
        humidity: randomizeValue(loc.humidity),
        rain: randomizeValue(parseInt(loc.rain)).toString(),
        forecast: loc.forecast.map((f) => ({
          ...f,
          temp: randomizeValue(f.temp),
        })),
      };

      return newData;
    });
  };

  return (
    <div className={styles.wrapperWeather}>
      <div className={styles.wrapperSelect}>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="hanoi">Ha Noi</option>
          <option value="hochiminh">Ho Chi Minh</option>
          <option value="thanhhoa">Thanh Hoa</option>
          <option value="danang">Da Nang</option>
          <option value="haiphong">Hai Phong</option>
        </select>
        <span className={`material-icons ${styles.btnRefesh}`} onClick={handleRandom}>
          change_circle
        </span>
      </div>

      <div
        className={`${styles.iconWeatherMain} ${
          location && styles[data[location].weather.replace(/\s+/g, "").toLowerCase()]
        }`}
      ></div>

      <div className={styles.temperature}>
        <h2 className={styles.temperatureNumber}>
          {location && data[location].temp}
        </h2>
        <div className={styles.weatherStatus}>
          {location && data[location].weather}
        </div>
      </div>

      <div className={styles.wrapperItemWeather}>
        <div className={`${styles.itemWeather} ${styles.wind}`}>
          <div className={`${styles.iconWeather} ${styles.windIcon}`}></div>
          <div className={styles.textItemWeather}>{data[location].wind}</div>
          <div className={styles.textItemName}>Wind</div>
        </div>
        <div className={styles.slash}></div>
        <div className={`${styles.itemWeather} ${styles.humidity}`}>
          <div className={`${styles.iconWeather} ${styles.humidityIcon}`}></div>
          <div className={styles.textItemWeather}>
            {data[location].humidity} %
          </div>
          <div className={styles.textItemName}>Humidity</div>
        </div>
        <div className={styles.slash}></div>
        <div className={`${styles.itemWeather} ${styles.rain}`}>
          <div className={`${styles.iconWeather} ${styles.rainIcon}`}></div>
          <div className={styles.textItemWeather}>
            {data[location].rain} %
          </div>
          <div className={styles.textItemName}>Rain</div>
        </div>
      </div>

      <div className={styles.weatherBottom}>
        <p className={styles.title}>Today</p>

        <div className={styles.forecastList}>
          {data[location].forecast.map((item, index) => {
            return (
              <div key={index} className={styles.forecastItem}>
                <div className={styles.forecastTemperature}>
                  {item.temp}
                  <span className={styles.temperatureDot}></span>
                </div>
                <div
                  className={`${styles.iconWeather} ${styles[`${item.status}Icon`]}`}
                ></div>
                <div className={styles.forecastTime}>{item.time}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Weather;
