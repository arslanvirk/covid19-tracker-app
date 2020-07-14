import React, { useContext } from 'react';
import { Line, defaults, Bar, Pie } from 'react-chartjs-2';
import styles from "./Chart.module.css";
import { Paper, makeStyles, Grid } from '@material-ui/core';
import { GlobalDataContext } from '../../Context/GlobalState';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap',
        margin: 0,
        marginTop: 20,
        width: '75%',
        maxWidth: 1050,
        //  backgroundColor: 'rgb(250, 250,250)'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
export default function Chart({ data, country}) {
    // defaults.global.maintainAspectRatio = false
    const classes = useStyles();
    const { globalStatisticsData } = useContext(GlobalDataContext);

    const lineChart = (
        data.length ? (
            <Line
                data={{
                    labels: data.map(({ date }) => date),
                    datasets: [
                        {
                            label: 'Infected',
                            fill: true,
                            borderColor: "rgba(0,0,255,0.5)",
                            backgroundColor: "rgba(153, 255, 255,0.5)",
                            data: data.map(({ confirmed }) => confirmed),
                        },
                        {
                            label: 'Deaths',
                            fill: true,
                            borderColor: "rgba(250,0,0.5)",
                            backgroundColor: 'rgb(255, 51, 51,0.6)',
                            data: data.map(({ deaths }) => deaths),
                        }
                    ]
                }}
            />
        )
            : null
    )
    //Bar Chart
    const barChart = (
        globalStatisticsData ? (
          <Bar
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                  data: [globalStatisticsData.total_cases, globalStatisticsData.total_recovered, globalStatisticsData.total_deaths],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Current statistics in ${country ? country : 'Global'}` },
            }}
          />
        ) : null
      );
    //Pie Chart
    const pieChart = (
        globalStatisticsData ? (
          <Pie
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                  data: [globalStatisticsData.total_cases, globalStatisticsData.total_recovered, globalStatisticsData.total_deaths],
                },
              ],
            }}
            options={{
              legend: { display: true,
                },
              title: { display: true, text: `Current statistics in ${country ? country : 'Global'}` },
            }}
          />
        ) : null
      );

    return (
        <div className={classes.root}>
            <Grid container justify="center" spacing={3}>
                <Grid item xs={12} sm={12} md={6} lg={12}>
                    {/* <article className="canvas-container"> */}
                    <Paper elevation={3} className={classes.paper}>
                        {lineChart}
                    </Paper>
                    {/* </article> */}
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={12}>
                    <Paper elevation={3} className={classes.paper}>
                        {barChart}
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={12}>
                    <Paper elevation={3} className={classes.paper}>
                        {pieChart}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}