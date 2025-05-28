import { useState } from 'react';
import './App.css';
import Option from './components/Option';
import GameResult from './components/GameResult';
import { Stack, Typography } from '@mui/material';

export type OptionType = "rock" | "paper" | "scissors";

type OptionData = {
  value: OptionType;
  emoji: string;
  backgroundColor: string;
};

const OPTIONS: OptionData[] = [
  { value: "rock", emoji: "👊", backgroundColor: "var(--color-rock-bg)" },
  { value: "paper", emoji: "🖐️", backgroundColor: "var(--color-paper-bg)" },
  { value: "scissors", emoji: "✌️", backgroundColor: "var(--color-scissors-bg)" },
];

function App() {
  const [scores, setScores] = useState<{ player: number; computer: number }>({ player: 0, computer: 0 });
  const [round, setRound] = useState(1);
  const [resultMessage, setResultMessage] = useState<string>("");

  const determineWinner = (player: OptionType, computer: OptionType): "player" | "computer" | "tie" => {
    if (player === computer) return "tie";

    if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      return "player";
    } else {
      return "computer";
    }
  };

  const handleClickOption = (option: OptionType) => {
    const randomChoice = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
    const winner = determineWinner(option, randomChoice.value);

    if (winner === "player") {
      setScores((prev) => ({ ...prev, player: prev.player + 1 }));
      setResultMessage("You win this round!");
    } else if (winner === "computer") {
      setScores((prev) => ({ ...prev, computer: prev.computer + 1 }));
      setResultMessage("Computer wins this round!");
    } else {
      setResultMessage("It's a tie!");
    }

    setRound((prev) => prev + 1);
  };

  const handleResetGame = () => {
    setScores({ player: 0, computer: 0 });
    setRound(1);
    setResultMessage("");
  };

  return (
    <div className="app-container">

      <Typography variant="h1" sx={{ mb: 4 }}>Rock Paper Scissors</Typography>

      <GameResult userScore={scores.player} computerScore={scores.computer} handleReset={handleResetGame} />
      <Stack direction="column" alignItems="center" justifyContent="center" sx={{ my: 4 }} width="100%">
        <Stack direction="row" alignItems="center" justifyContent="center" sx={{ mb: 2, gap: 2 }} width="100%">
          {OPTIONS.map((option) => (
            <Option
              value={option.value}
              emoji={option.emoji}
              backgroundColor={option.backgroundColor}
              onClick={() => handleClickOption(option.value)}
            />
          ))}
        </Stack>
        <Typography variant="h5" sx={{ my: 2 }}>Choose your option and try to beat the computer!</Typography>
        <Typography variant="subtitle1" sx={{ mb: 3 }}>
          Rock beats Scissors • Paper beats Rock • Scissors beats Paper
        </Typography>
      </Stack>
    </div>
  );
}

export default App;
