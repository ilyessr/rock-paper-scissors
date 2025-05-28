import { useState } from 'react';
import './App.css';
import Option from './components/Option';
import GameResult from './components/GameResult';

export type OptionType = "rock" | "paper" | "scissors";

type OptionData = {
  value: OptionType;
  img: string;
};

const OPTIONS: OptionData[] = [
  { value: "rock", img: "/rock.png" },
  { value: "paper", img: "/paper.png" },
  { value: "scissors", img: "/scissors.png" },
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
      <h1>Rock Paper Scissors</h1>
      <p className="subtitle">Choose your option and try to beat the computer!</p>

      <GameResult userScore={scores.player} computerScore={scores.computer} handleReset={handleResetGame} />
      <div className="options">
        {OPTIONS.map((option) => (
          <Option
            key={option.value}
            value={option.value}
            img={option.img}
            onClick={() => handleClickOption(option.value)}
          />
        ))}
      </div>



      <div className="results">
        {resultMessage && <p className={`result-message`}>{resultMessage}</p>}
      </div>

      <button className="reset-button" onClick={handleResetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default App;
