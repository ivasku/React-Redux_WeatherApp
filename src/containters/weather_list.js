import React from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends React.Component {
    
    renderWeather(cityData) {
        
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humiduty = cityData.list.map(weather => weather.main.humiduty);
        const lon = cityData.city.coord.lon;
        const lat = cityData.city.coord.lat;
      //  console.log("Temperature" , temp);

        return(
            <tr key={cityData.city.name}>
                <td><GoogleMap lon={lon} lat ={lat}/></td>
                <td><Chart data={temps} color="orange" units="C"/> </td>
                <td>
                    <Chart data={pressure} color="green" units="mBar"/>
                </td>

                <td>
                    <Chart data={humiduty} color="black" units="%"/>
                </td>
            </tr>

         

        );
    }
    
    render() {
        return (
            <table className = "table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (mbar)</th>
                        <th>Humidity (%)</th>
                    </tr>                    
                </thead>

                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>

             </table>

        );
    }
}

function mapStateToProps(state) {
    return {weather: state.weather};
}


export default connect (mapStateToProps) (WeatherList);