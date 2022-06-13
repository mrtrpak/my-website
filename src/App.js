import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import HomePage from './pages/home';
import SoccerPage from './pages/soccer';

export default function App() {
  let [standings, setStandings] = React.useState(null);

  React.useEffect(() => {
    axios({
      "url": "https://api.football-data.org/v2/competitions/BL1/standings",
      "headers": {
        "X-Auth-Token": "5d08ba09e1d84003adc242dbd50ca5bb"
      }
    })
    .then(res => {
      setStandings(res.data);
    })
    .catch(err => console.log(err));
  }, []);
  console.log(standings, "standings");

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/soccer" element={<SoccerPage />} />
        </Routes>
      </Router>
    </div>
  );
};
