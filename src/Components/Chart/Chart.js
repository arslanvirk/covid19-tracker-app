import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from "./Chart.module.css";

export default function Chart({ data }) {
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
    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}