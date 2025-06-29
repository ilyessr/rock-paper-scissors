import { useState } from "react";
import "./App.css";
import ScoreBoard from "./components/ScoreBoard";
import { Stack, Typography } from "@mui/material";
import Options, { OPTIONS } from "./components/Options";
import GameResult from "./components/GameResult";

export type OptionType = "rock" | "paper" | "scissors" | null;
export type WinnerType = "player" | "computer" | "tie" | null;

function App() {
  const [playerChoice, setPlayerChoice] = useState<OptionType | null>(null);
  const [computerChoice, setComputerChoice] = useState<OptionType | null>(null);
  const [isWaiting, setIsWaiting] = useState<boolean>(false);
  const [winner, setWinner] = useState<WinnerType>(null);

  const resetChoices = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setWinner(null);
    setIsWaiting(false);
  };

  const determineWinner = (
    player: OptionType | null,
    computer: OptionType | null
  ): WinnerType => {
    if (!player || !computer) {
      return null;
    }

    if (player === computer) {
      return "tie";
    }

    if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      return "player";
    }
    return "computer";
  };

  const playRound = (playerChoice: OptionType) => {
    setIsWaiting(true);
    setPlayerChoice(playerChoice);
    setComputerChoice(null);
    setWinner(null);

    setTimeout(() => {
      const computerChoice =
        OPTIONS[Math.floor(Math.random() * OPTIONS.length)].value;
      setComputerChoice(computerChoice);

      setTimeout(() => {
        const gameWinner = determineWinner(playerChoice, computerChoice);
        setWinner(gameWinner);
        setIsWaiting(false);
      }, 1000);
    }, 2000);
  };

  return (
    <div className="app-container">
      <Typography
        variant="h1"
        sx={{ mb: 2, fontSize: { xs: "1.5rem", sm: "2.5rem" } }}
      >
        Rock Paper Scissors
      </Typography>
      <Typography
        variant="h2"
        sx={{ mb: 4, fontSize: { xs: "1rem", sm: "1.5rem" } }}
      >
        Choose your weapon and try to beat the computer!
      </Typography>
      <ScoreBoard winner={winner} resetChoices={resetChoices} />
      <GameResult
        winner={winner}
        playerChoice={playerChoice}
        computerChoice={computerChoice}
        isWaiting={isWaiting}
      />

      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        <Options playRound={playRound} isWaiting={isWaiting} />
        <Typography
          variant="subtitle1"
          sx={{ mb: 3, fontSize: { xs: "0.8rem", sm: "1rem" } }}
        >
          Rock beats Scissors • Paper beats Rock • Scissors beats Paper
        </Typography>
      </Stack>
    </div>
  );
}

export default App;
