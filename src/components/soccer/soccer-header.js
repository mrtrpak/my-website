import React from 'react';
import { ButtonGroup, Button } from '@mui/material';

export default function soccerHeader(setLeague) {
  return(
    <div>
      <ButtonGroup variant='text' aria-label='text button group'>
        <Button onClick={() => setLeague("PL")}>English Premier League</Button>
        <Button onClick={() => setLeague("BL1")}>German Bundesliga</Button>
        <Button onClick={() => setLeague("FL1")}>French Ligue 1</Button>
        <Button onClick={() => setLeague("SA")}>Italian Serie A</Button>
        <Button onClick={() => setLeague("PD")}>Spanish Primera Division</Button>
      </ButtonGroup>
      <ButtonGroup variant='text' aria-label='text button group'>
        <Button onClick={() => setLeague("CL")}>Champions League</Button>
        <Button onClick={() => setLeague("EC")}>European Championship</Button>
        <Button onClick={() => setLeague("WC")}>World Cup</Button>
      </ButtonGroup>
    </div>
  );
};
