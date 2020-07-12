import React, { useState, useContext } from 'react';

const url = 'https://api.thevirustracker.com/free-api'; //Base Api for Fetch COVID-19 Data

//Fetch Global Statistics Data
export async function FetchGlobalDataStatistica() {
    const response = await fetch(`${url}?global=stats`);
    return await response.json();
}

//Fetch Daily Data Globally
export const fetchDailyChartGlobalData = async () => {
    const response = await fetch('https://covid19.mathdro.id/api/daily');
    return await response.json();
};

//Fetch specified Country Data
export const fetchCountryWisehData = async (country) => {
  // let changeableUrl = url;

  // if (country) {
  //   changeableUrl = `${url}?countryTotal=${country}`;
  // }

  // try {
  //   const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

  //   return { confirmed, recovered, deaths, lastUpdate };
  // } catch (error) {
  //   return error;
  // }
};
//Fetch Daily Data by Country wise
export const fetchDailyChartDataByCountry = async () => {
  // const response = await fetch(`${url}?countryTimeline=${country}`);
  // const { timelineitems } = await response.json();
  // const keys = Object.keys(timelineitems["0"]);
  // const covidData = [];
  // keys.map(key => {
  //   return covidData.push({
  //     confirmed: timelineitems["0"][key]["new_daily_cases"],
  //     deaths: timelineitems["0"][key]["new_daily_deaths"],
  //     date: key,
  //   })
  // });
  // setCovidChartData(covidData);
};
//Fetch Countries
export const fetchCountries = async () => {
  // try {
  //   const { data: { countries } } = await axios.get(`${url}/countries`);

  //   return countries.map((country) => country.name);
  // } catch (error) {
  //   return error;
  // }
};