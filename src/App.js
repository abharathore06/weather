import { Component } from 'react';
import './App.css';
import Header from './components/header';
import SearchBox from './components/searchBox';
import FetchData from './components/fetchData';

class Weather extends Component{
  constructor(props) {
    super(props);
    this.state = {
        cityNameFound: null,
        cityNameError: false,
        loadingIndicator: false,
        cityName : null,
        cityTemperature: null,
        cityWeatherDescription: null,
        cityWind: null,
        cityHumidity: null,
        cityMaxTmp: null,
        cityMinTmp: null,
        cityPressure: null,
        citySunrise: null,
        citySunset:  null,
        cityCountry: null,
    }
    console.log("Constructor loaded.");
    this.citySearch = this.citySearch.bind(this);
  }


  citySearch(name) {
    this.setState({
      cityNameFound: false,
      loadingIndicator: true,
      cityNameError: false
    })


    let that = this;


    fetch('https://api.openweathermap.org/data/2.5/weather?q='+name+"&appid=80186bc6ef5c092a7aa7bcdb10ea8c80&units=metric")
    .then(function(response) {
      return response.json();
    })


    .then(function(response) {
      if(response.cod === "404") {
        that.setState({
          cityNameFound: false,
          cityNameError: true,
          loadingIndicator: false
        })
      }


      else if(response.cod === 200) {
        console.log("Response = " , response);
        let sunrise =  new Date(response.sys.sunrise*1000).toLocaleTimeString();
        let sunset =  new Date(response.sys.sunset*1000).toLocaleTimeString();
      

        that.setState({
          cityNameFound: true,
          cityNameError: false,
          cityName: response.name,
          cityTemperature: response.main.temp,
          cityWeatherDescription: response.weather[0].main,
          cityWind : response.wind.speed,
          cityHumidity: response.main.humidity,
          cityMaxTmp: response.main.temp_max,
          cityMinTmp: response.main.temp_min,
          cityPressure: response.main.pressure,
          weatherIcon: response.weather[0].icon,
          loadingIndicator: false,
          cityCountry: response.sys.country,
          citySunrise: sunrise,
          citySunset: sunset
        })
      }
      
      
    });
  }


  render() {
    let showErrorMessage = this.state.cityNameError === true ? (

      <div className='App-NotFound'>
        <h4>City Name not found</h4>
      </div>

    ) : ('')

    let showTemperatureDetails  = this.state.cityNameFound === true ? (

      <FetchData
      cityName={this.state.cityName} 
      cityTemperature={this.state.cityTemperature} 
      cityWeatherDescription = {this.state.cityWeatherDescription}
      cityWind = {this.state.cityWind}
      cityHumidity = {this.state.cityHumidity}
      cityMaxTmp = {this.state.cityMaxTmp}
      cityMinTmp = {this.state.cityMinTmp}
      cityPressure = {this.state.cityPressure}
      weatherIcon = {this.state.weatherIcon}
      citySunset = {this.state.citySunset}
      citySunrise = {this.state.citySunrise}
      cityCountry = {this.state.cityCountry}>

      </FetchData>
    
    ) : (
      this.state.loadingIndicator === true ? (

        <div className='City-Search'>
          <h4>Searching City name...</h4>
        </div>

      ) : (' ')
      
    )


    return (

      <div>

        <Header></Header>
        <br/>


        <SearchBox citySearch={this.citySearch} ></SearchBox>


        {showErrorMessage}
        {showTemperatureDetails}

      </div>

    );
  }
}


export default Weather;
