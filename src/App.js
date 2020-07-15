import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import './App.css';
import Header from './Components/Header/Header';
import GlobalStatistics from './Components/StatisticsData/GlobalStatistics';
import Chart from './Components/Chart/Chart';
import { GlobalDataContext } from './Context/GlobalState'
import { FetchGlobalDataStatistica, fetchDailyChartGlobalData, fetchDailyChartDataByCountry } from './API/Index';

import { CountryPicker } from './Components/CountryPicker/CountryPicker';
import ButtomAppBar from './Components/App Bar/AppBar';

function App() {
  const [globalStatisticsData, setGlobalStatisticsData] = useState({}); //Use for save Global Api respose data
  const [covidChartData, setCovidChartData] = useState({}); //Use for save Chart Api respose data
  const [isData, setData] = useState(false); //Flag is for Call Use Effect(Api) on change value
  const [isFetching, setFetching] = useState(false); //Flag check Data is loaded or not from Api
  const [isGlobalData, setGlobalData] = useState(false);
  const [onChangeData, setOnChangeData] = useState(false);
  const [onChangeCountryData, setOnChangeCountryData] = useState("");
 
  //Global Statistics Data Feching
  useEffect(() => {
    async function fetchData() {
      try {
        setFetching(true);
        let { results } = await FetchGlobalDataStatistica();
        const covidCountryData = {
          total_cases: results[0].total_cases,
          total_deaths: results[0].total_deaths,
          total_unresolved: results[0].total_unresolved,
          total_recovered: results[0].total_recovered,
          total_new_cases_today: results[0].total_new_cases_today,
          total_new_deaths_today: results[0].total_new_deaths_today,
          total_affected_countries: results[0].total_affected_countries,
        }
        setGlobalStatisticsData(covidCountryData);
        setFetching(false);
      } catch (error) {
        alert(error);
      }
    }
    fetchData();
  }, [isGlobalData]);

  //Global Chart Data Feching
  useEffect(() => {
    async function fetChartchData() {
      try {
        const data = await fetchDailyChartGlobalData();
        const dailyData = data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
        setCovidChartData(dailyData);
        setFetching(false);
      } catch (error) {
        alert(error);
      }
    }
    setTimeout(() => {
      fetChartchData();
    }, 3000);
  }, [isGlobalData]);

  function handleCountryChange(selectedcountry) {
    setOnChangeCountryData(selectedcountry);

    if (selectedcountry && selectedcountry !== "global") {
      setOnChangeData(true);
      setData(!isData);
    }
    else
      setGlobalData(!isGlobalData);
  }

  //Country Statistics Data Feching
  useEffect(() => {
    async function handleCountryChangeData() {
      try {
        const { countrydata } = await FetchGlobalDataStatistica(onChangeCountryData);
        const covidCountryData = {
          total_cases: countrydata && countrydata[0].total_cases,
          total_deaths: countrydata && countrydata[0].total_deaths,
          total_unresolved: countrydata && countrydata[0].total_serious_cases,
          total_recovered: countrydata && countrydata[0].total_recovered,
          total_new_cases_today: countrydata && countrydata[0].total_new_cases_today,
          total_new_deaths_today: countrydata && countrydata[0].total_new_deaths_today
        }
        setGlobalStatisticsData(covidCountryData);
        setFetching(false);
      } catch (error) {
        alert(error);
      }
    }
    if (onChangeData)
      handleCountryChangeData();
  }, [isData]);
  
  //Country Chart Data Feching
  useEffect(() => {
    async function fetchDailyChartCountryData() {
      try {
        const data = await fetchDailyChartDataByCountry(onChangeCountryData);
        //const dailyData = data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
        setCovidChartData(data);
        setFetching(false);
      } catch (error) {
        alert(error);
      }
    }
    if (onChangeData)
    fetchDailyChartCountryData();
  }, [isData]);

  if (isFetching) {
    return <div className="container">Data Loading.....<CircularProgress size={300} /></div>
  }

  //let Globalvalue = useState([], () => {});
  return (
    <GlobalDataContext.Provider value={{ globalStatisticsData }}>
      <div className="container">
        <Header />
        <GlobalStatistics />
        <CountryPicker handleCountryChange={handleCountryChange} /> {/* Pass Method as reference */}
        <Chart data={covidChartData} country={onChangeCountryData}/>
        <ButtomAppBar/>
      </div>
    </GlobalDataContext.Provider>
  );
}

export default App;
