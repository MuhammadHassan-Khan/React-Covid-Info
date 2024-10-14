import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {

  const [covidData, setCovidData] = useState({});
  const [country, setCountry] = useState("global");

  useEffect(() => {

    const fetchData = async () => {
      const url = country === "global"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${country}`;
      const response = await axios.get(url);
      setCovidData(response.data);
    };
    fetchData();
  }, [country]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">


      <img
        src="https://example.com/covid-banner.jpg"
        alt="COVID-19"
        className="w-full max-w-3xl mb-8 rounded-lg shadow-lg"
      />

      <p className="text-4xl font-bold my-8 text-teal-400">COVID-19 Counter</p>

      <div className="bg-gray-800 text-gray-100 shadow-lg rounded-lg p-8 mb-8 w-full max-w-md">
        <label className="block mb-2 text-lg font-semibold">Select Country:</label>
        <select
          className="block w-full p-3 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-700 text-white"
          onChange={(e) => setCountry(e.target.value)}>
          <option value="global">Global</option>
          <option value="USA">USA</option>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
        </select>
      </div>

      <div className="bg-gray-800 text-gray-100 shadow-lg rounded-lg p-8 w-full max-w-md">
        <p className="text-2xl font-bold mb-4 text-purple-400">Statistics:</p>

        <img
          src="https://example.com/covid-virus.jpg"
          alt="COVID-19 Virus"
          className="w-full max-w-xs mx-auto mb-6 rounded-lg shadow-md"
        />

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-teal-900 p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-teal-300">Total Cases:</p>
            <span className="text-xl">{covidData.cases ? covidData.cases.toLocaleString() : 'Loading...'}</span>
          </div>
          <div className="bg-purple-900 p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-purple-300">Total Deaths:</p>
            <span className="text-xl">{covidData.deaths ? covidData.deaths.toLocaleString() : 'Loading...'}</span>
          </div>
          <div className="bg-green-900 p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-green-300">Total Recovered:</p>
            <span className="text-xl">{covidData.recovered ? covidData.recovered.toLocaleString() : 'Loading...'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
