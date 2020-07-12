import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import GlobalStatistics from './Components/StatisticsData/GlobalStatistics';
import Chart from './Components/Chart/Chart';
import {GlobalDataContext} from './Context/GlobalState'
import { FetchGlobalDataStatistica, fetchDailyChartGlobalData } from './API/Index';
import { CircularProgress } from '@material-ui/core';

function App() {
  const [globalStatisticsData, setGlobalStatisticsData] = useState([]); //Use for save Global Api respose data
  const [covidChartData, setCovidChartData] = useState({}); //Use for save Chart Api respose data
  const [isData, setData] = useState(false); //Flag is for Call Use Effect(Api) on change value
  const [isFetching, setFetching] = useState(false); //Flag check Data is loaded or not from Api 
  useEffect(() => {
      async function fetchData() {
         try {
          setFetching(true);
          let apiData = await FetchGlobalDataStatistica();
          setGlobalStatisticsData(apiData);
          setFetching(false);
         } catch (error) {
             alert(error);
         }
      }
      fetchData();
  }, [isData]);

 useEffect(() => {
  async function fetChartchData() {
     try {
      const data = await fetchDailyChartGlobalData();
      const dailyData = data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
      setCovidChartData(dailyData);
      console.log(covidChartData);
     } catch (error) {
         alert(error);
     }
  }
 fetChartchData();
}, [isData]);

  if (isFetching) {
      return <div className="container">Data Loading.....<CircularProgress size={300}/></div>
  }

  //let Globalvalue = useState([], () => {});
  return (
    <GlobalDataContext.Provider value = {{globalStatisticsData}}>
    <div className="container">
    <Header/>
    <GlobalStatistics/>
    <br/>
    <Chart data={covidChartData}/>
    </div>
    </GlobalDataContext.Provider>
  );
}

export default App;
