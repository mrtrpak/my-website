import axios from 'axios';
import React from 'react';

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
      <h1>Fetching Data with React Hooks</h1>
    </div>
  );
};
