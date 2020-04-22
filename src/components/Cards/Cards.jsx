import React from 'react';
import styles from './Cards.module.css';
import cx from 'classnames';
import CountUp from 'react-countup';
import {Card, CardContent , Typography , Grid, StylesProvider} from '@material-ui/core';
const Cards=({ data :{confirmed,recovered,deaths,lastUpdate}})=>{

    // console.log(confirmed);
    if(!confirmed){
        return  'Loading ...'
    }

    var x=(recovered.value/confirmed.value)*100;
    x=x.toFixed(2);

    var y=(deaths.value/confirmed.value)*100;
    y=y.toFixed(2);
    return(
        <div className={StylesProvider.container}>
        <Grid container spacing ={3} justify ="center">
            <Grid item component={Card} xs={12}  md={3} className={cx(styles.card,styles.infected)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variat="h5">
                        <CountUp
                            start={0}
                            end={confirmed.value}
                            duration={2.5}
                            separator=","
                        />
                    </Typography>
    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of active cases of Covid-19 </Typography>

                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12}  md={3} className={cx(styles.card,styles.recovered)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variat="h5">
                        <CountUp
                            start={0}
                            end={recovered.value}
                            duration={2.5}
                            separator=","
                        />
                    </Typography>
                    <Typography variat="h5">
                        <CountUp
                            start={0}
                            end={x}
                            duration={2.5}
                            separator=","
                        /> %
                    </Typography>

                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of recoveries from Covid-19 </Typography>

                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12}  md={3} className={cx(styles.card,styles.deaths)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variat="h5">
                        <CountUp
                            start={0}
                            end={deaths.value}
                            duration={2.5}
                            separator=","
                        /> 
                    </Typography>
                    <Typography variat="h5">
                        <CountUp
                            start={0}
                            end={y}
                            duration={2.5}
                            separator=","
                        /> %
                    </Typography>

                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of deaths caused by Covid-19 </Typography>

                </CardContent>
            </Grid>
        </Grid>
        </div>
    );
}

export default Cards;