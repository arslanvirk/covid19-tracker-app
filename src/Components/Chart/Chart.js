import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

export default function Chart() {
    const [globalStatisticsData, setglobalStatisticsData] = useState(); //Use for save Api respose data
    const [isData, setData] = useState(false); //Flag is for Call Use Effect(Api) on change value
    const [isFetching, setFetching] = useState(false); //Flag check Data is loaded or not from Api 
    useEffect(() => {
        async function fetchData() {
           try {
            setFetching(true);
            const response = await fetch('https://thevirustracker.com/timeline/map-data.json');
            let apiData = await response.json()
            setglobalStatisticsData(apiData);
            setFetching(false);
            //console.log("Data = ", globalStatisticsData);
           } catch (error) {
              // alert(error);
           }
        }
        fetchData();
    }, [isData]);

    if (isFetching) {
        return <div>Data Loading.....</div>
    }
    return (
        <div>
            <h2>Line Chart</h2>
            <Line data={data} />
        </div>
    );
}
