import React, { useState, useContext } from 'react';

const url = 'https://api.thevirustracker.com/free-api'; //Base Api for Fetch COVID-19 Data
const url2 = 'https://covid19.mathdro.id/api'; //Base Api2 for Fetch COVID-19 Data

//Fetch Global Statistics Data
export async function FetchGlobalDataStatistica(country) {
  if(!country || country === "global")
  {
  const response = await fetch(`${url}?global=stats`);
  return await response.json();
  }
  const response = await fetch(`${url}?countryTotal=${country}`);
  return await response.json();
}

//Fetch Daily Data Globally
export const fetchDailyChartGlobalData = async () => {
  const response = await fetch(`${url2}/daily`);
  return await response.json();
};

//Fetch Daily Data by Country wise
export const fetchDailyChartDataByCountry = async (country) => {
  const response = await fetch(`${url}?countryTimeline=${country}`);
  const { timelineitems } = await response.json();
  const keys = Object.keys(timelineitems["0"]); //Get index keys that is dates
  const covidData = [];
  keys.map(key => {
    return covidData.push({
      confirmed: timelineitems["0"][key]["new_daily_cases"],
      deaths: timelineitems["0"][key]["new_daily_deaths"],
      date: key,
    })
  });
  return covidData;
};

//Fetch Countries
export const fetchCountries = async () => {
  const response  = await fetch(`${url2}/countries`);
  const data = await response.json();
  const {countries} = data;
  return countries;
};