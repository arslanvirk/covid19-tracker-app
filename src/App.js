import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import GlobalStatistics from './Components/StatisticsData/GlobalStatistics';
import Chart from './Components/Chart/Chart';

function App() {
  return (
    <div className="container">
    <Header/>
    <GlobalStatistics/>
    <br/>
    <Chart/>
    </div>
  );
}

export default App;
