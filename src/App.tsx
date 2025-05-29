import { useState } from 'react';
import './App.css';
import ScoreBoard from './components/ScoreBoard';
import { Stack, Typography } from '@mui/material';
import Options from './components/Options';

export type OptionType = "rock" | "paper" | "scissors";


function App() {
  const [scores, setScores] = useState<{ player: number; computer: number }>({ player: 0, computer: 0 });
  const [round, setRound] = useState(1);
  const [resultMessage, setResultMessage] = useState<string>("");



  const handleResetGame = () => {
    setScores({ player: 0, computer: 0 });
    setRound(1);

    setResultMessage("");
  };

  return (
    <div className="app-container">

      <Typography variant="h1" sx={{ mb: 4 }}>Rock Paper Scissors</Typography>
      <ScoreBoard userScore={scores.player} computerScore={scores.computer} handleReset={handleResetGame} />
      <Stack direction="column" alignItems="center" justifyContent="center" width="100%">
        <Options setScores={setScores} setResultMessage={setResultMessage} setRound={setRound} />
        <Typography variant="h5" sx={{ my: 1 }}>Choose your option and try to beat the computer!</Typography>
        <Typography variant="subtitle1" sx={{ mb: 3 }}>
          Rock beats Scissors • Paper beats Rock • Scissors beats Paper
        </Typography>
      </Stack>
    </div>
  );
}

export default App;
