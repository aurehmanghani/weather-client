import React from 'react'
import WeatherList from './WeatherList'

const SearchResult = (props) => {
    return(
        <div className="row">
                <WeatherList weather={props.data.searchWeatherReducer.weatherData}/>
        </div>
    )
}
export default SearchResult