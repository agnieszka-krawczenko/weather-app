import React from 'react';
import './Result.css';

const Result = props => {

    const { err, city, date, temp, sunrise, sunset, pressure, wind } = props.weather;

    let content = null

    if (!err && city) {

        const tempInCelsius = Math.round(temp - 273.15);
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

        content = (
            <>
                <h3>Wyszukiwanie dla miasta <em>{city}</em>
                </h3>
                <h4>Dane dla dnia i godziny: {date}</h4>
                <h4>Aktualna temperatura: {tempInCelsius}&#176;C</h4>
                <h4>Wschód słońca dzisiaj o: {sunriseTime}</h4>
                <h4>Zachód słońca dzisiaj o: {sunsetTime}</h4>
                <h4>Aktualna siła wiatru: {wind} m/s</h4>
                <h4>Aktualne ciśnienie: {pressure} hPa</h4>
            </>
        )
    }

    return (
        <div className="result">
            {err ? `Brak w bazie miasta ${city}` : content}
        </div>
        // <>
        //     <div>Pogoda dla {city}</div>
        //     <div>Temperatura: {Math.round(temp - 273.15)}</div>
        // </>
    );
}

export default Result;