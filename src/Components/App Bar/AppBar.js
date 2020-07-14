import React from 'react';
import { makeStyles, rgbToHex } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    colorsset: {
        backgroundColor: 'rgb(250, 250,250)',
        color : 'rgb(0, 128,255)',
    },
}));

export default function ButtomAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.colorsset} >
                <Typography variant="h6" className={classes.title}>
                    Developed by Arslan Ameen
          </Typography>
            </AppBar>
        </div>
    );
}
