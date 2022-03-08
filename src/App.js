import React, {useEffect, useState} from "react";
import './App.css';
import Table from './LeagueTable.js'

function App() {
  const BASE_URL = 'https://api.football-data.org/v2';
  const API_KEY = 'bed31e50ec644da79f2d811b2c5d52df';
  const league = 'Premier League';

  const [premStandings, setPremStanindgs] = useState([]);

  const getPremierLeagueMatches = async () => {
    const response = await fetch(
      `${BASE_URL}/competitions/PL/standings`, {
      method: 'GET',
      headers: {
        'X-Auth-Token': API_KEY
      }
    });
    const data = await response.json();
    setPremStanindgs(data.standings[0].table);
  }

  useEffect(() => {
    getPremierLeagueMatches();
  }, [])

  return (
    <div className="App">
      <Table
        title={league}
        standings={premStandings}
      />
    </div>
  );
}

export default App;
