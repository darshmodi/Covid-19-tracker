import React from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import {fetchData} from './api';
import {Typography} from '@material-ui/core';

import coronaImage from './images/Covid-19.png';
class App extends React.Component{

state ={
    data: {},
    country: '',
}

    async componentDidMount(){
        const fetchedData= await fetchData();
        this.setState({data : fetchedData,});
    }

    handleCountryChange =async (country) =>{
        const fetchedData= await fetchData(country);
        // console.log(fetchedData);
        this.setState({data : fetchedData, country: country});

        // console.log(country);
    }
    render(){
        const {data,country}=this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="Corona "/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                <div styles="Color : red;">
                <h1> </h1>
                <Typography variant="body1"> Developed by <a href="https://www.linkedin.com/in/darsh-modi-a78419175/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">Darsh Modi</a></Typography>
                <Typography variant="body1"> For any issues or feedback write to <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBmXKXkDhvqmKsLwMKQVMpdDKNRCqsbHjBMqnrlZzxtSnJCMFQtQJdjxPCKDTgpQXdQSqrR" target="_blank" rel="noopener noreferrer">darshmodi7376@gmail.com</a> </Typography>
                </div>
            </div>
        )
    }
}

export default App;