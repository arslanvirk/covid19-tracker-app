import React, { useState, useContext } from 'react';
import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import CountUp from 'react-countup';
import { GlobalDataContext } from '../../Context/GlobalState';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap',
        margin: 0,
        marginTop: 30,
        maxWidth: 1000,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function GlobalStatistics() {
    const classes = useStyles();
    const { globalStatisticsData } = useContext(GlobalDataContext);

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="subtitle2" gutterBottom>
                            Coronavirus Cases:
                        </Typography>
                        <Typography variant="h4" gutterBottom style={{ color: '#248BE5' }}>
                            <CountUp start={0} end={globalStatisticsData && globalStatisticsData.total_cases} duration={2.75} separator="," />
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="subtitle2" gutterBottom>
                            ACTIVE CASES:
                        </Typography>
                        <Typography variant="h4" gutterBottom style={{ color: '#FAA16B' }}>
                            <CountUp start={0} end={globalStatisticsData && globalStatisticsData.total_unresolved} duration={2.75} separator="," />
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="subtitle2" gutterBottom>
                            Deaths:
                        </Typography>
                        <Typography variant="h4" gutterBottom style={{ color: '#FB4C4A' }}>
                            <CountUp start={0} end={globalStatisticsData && globalStatisticsData.total_deaths} duration={2.75} separator="," />
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="subtitle2" gutterBottom>
                            Recovered:
                        </Typography>
                        <Typography variant="h4" gutterBottom style={{ color: '#8ACA2B' }}>
                            <CountUp start={0} end={globalStatisticsData && globalStatisticsData.total_recovered} duration={2.75} separator="," />
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="subtitle2" gutterBottom>
                            Total New Cases(24 HRS):
                        </Typography>
                        <Typography variant="h4" gutterBottom style={{ color: '#248BE5' }}>
                            <CountUp start={0} end={globalStatisticsData && globalStatisticsData.total_new_cases_today} duration={2.75} separator="," />
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="subtitle2" gutterBottom>
                            Total New Deaths(24 HRS):
                        </Typography>
                        <Typography variant="h4" gutterBottom style={{ color: '#FB4C4A' }}>
                            <CountUp start={0} end={globalStatisticsData && globalStatisticsData.total_new_deaths_today} duration={2.75} separator="," />
                        </Typography>
                    </Paper>
                </Grid>
                {globalStatisticsData.total_affected_countries ?
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="subtitle2" gutterBottom>
                                Total Affected Countries:
                        </Typography>
                            <Typography variant="h4" gutterBottom style={{ color: '#248BE5' }}>
                                <CountUp start={0} end={globalStatisticsData && globalStatisticsData.total_affected_countries} duration={2.75} separator="," />
                            </Typography>
                        </Paper>
                    </Grid>
               : null }
            </Grid>
        </div>
    );
}
