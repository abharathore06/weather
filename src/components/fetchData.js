import React, { Component } from 'react';
import CommentsAdd from './commentsAdd';
import './fetchData.css';

class FetchData extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    let currentDate = new Date();
    let weatherIcon = "http://openweathermap.org/img/w/" + this.props.weatherIcon + ".png"
    return (
   <div>
      <div className='App-Fetch'>
        <span className='Header-Details'>
            {this.props.cityName}, {this.props.cityCountry},  {currentDate.toDateString()} 
        </span>
        <br/>
        <div className='App-Fetch-b'>

          <div className='App-Fetch-c'>
            <h1> 
              <span className='Main-Temp-Detail'>{this.props.cityTemperature}&deg;C               
              <img src={weatherIcon}/>
              </span> 
            </h1>
          </div>

          <div className='App-Fetch-d'>
            <p className='Temperature-Details'>
              Weather: <b>{this.props.cityWeatherDescription}</b><br/>
              Wind:  <b>{this.props.cityWind} km/hr</b><br/>
              <br/>

              Humidity: <b>{this.props.cityHumidity}%</b> <br/>
              Pressure: <b> {this.props.cityPressure} Pa</b><br/>
              <br/>

              Max Temp: <b>{this.props.cityMaxTmp}&deg;C </b><br/>
              Min Temp: <b>{this.props.cityMinTmp}&deg;C</b><br/> 
              <br/>

              Sunrise : <b> {this.props.citySunrise}</b><br/>
              Sunset: <b> {this.props.citySunset}</b><br/>

            </p>

          </div>
        </div>

      </div>
      
      <div className='addCommentsBox'>
        <CommentsAdd></CommentsAdd>
      </div>

      <br/>
      <br/>
   </div>
    );
  }
}
export default FetchData;
