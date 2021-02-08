import React from 'react'

const WeatherList = (props) => {

    let styleW = {
        width: "30rem"
    }
    let { weather } = props;

    if (weather) {
        return(
            <React.Fragment>
                <div className="card mt-4" style={styleW}>
                    <div className="card-header text-center bg-primary bg-gradient text-white">
                        <span className="fs-6 text"> {weather.name} | {weather.main.temp} | {weather.weather[0].main}  </span>
                        
                        
                    </div>
                    <div className="card-body">
                        <div className="container">
                            <div className="row">
                                <div className="col text-secondary">Feels Like</div>
                                <div className="col"><span className="badge rounded-pill bg-primary text-white">{weather.main.feels_like}</span></div>
                                <div className="w-100"></div>
                                <div className="col text-secondary">Min Temp</div>
                                <div className="col"><span className="badge rounded-pill bg-primary text-white">{weather.main.temp_min}</span></div>
                            </div>
                            <div className="row">
                                <div className="col text-secondary">Max Temp</div>
                                <div className="col"><span className="badge rounded-pill bg-primary text-white">{weather.main.temp_max}</span></div>
                                <div className="w-100"></div>
                                <div className="col text-secondary">Pressure</div>
                                <div className="col"><span className="badge rounded-pill bg-primary text-white">{weather.main.pressure}</span></div>
                            </div>
                            <div className="row">
                                <div className="col text-secondary">Humidity</div>
                                <div className="col"><span className="badge rounded-pill bg-primary text-white">{weather.main.humidity}</span></div>
                                <div className="w-100"></div>
                                <div className="col text-secondary">Visibility</div>
                                <div className="col"><span className="badge rounded-pill bg-primary text-white">{weather.visibility}</span></div>
                            </div>
                            <div className="row">
                                <div className="col text-secondary">Wind</div>
                                <div className="col"><span className="badge rounded-pill bg-primary text-white">{weather.wind.speed}</span></div>
                                <div className="w-100"></div>
                                <div className="col text-secondary">Polar Coords</div>
                                <div className="col"><span className="badge rounded-pill bg-primary text-white">{weather.coord.lon},{weather.coord.lat}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    } else {
        return <p>No Record Found</p>;
    }
    //console.log("weather list",props.weather)

    

    
}

export default WeatherList