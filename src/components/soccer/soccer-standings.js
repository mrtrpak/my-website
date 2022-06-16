import React from 'react';
import axios from 'axios';

const soccerKey = process.env.soccerKey || null;

import SoccerHeader from './soccer-header';

export default function SoccerStandings() {
  let [league, setLeague] = React.useState("BL1");
  let [standings, setStandings] = React.useState(null);

  console.log(league);

  React.useEffect(() => {
    setLeagueFunc();
    axios({
      "url": `https://api.football-data.org/v2/competitions/${league}/standings`,
      "headers": {
        "X-Auth-Token": soccerKey
      }
    })
    .then(res => {
      setStandings(res.data.standings[0].table);
    })
    .catch(err => console.log(err));
  }, []);

  console.log(standings, "standings");

  return (
    <div>
      <SoccerHeader setLeague={setLeague} />
    </div>
  );
};
