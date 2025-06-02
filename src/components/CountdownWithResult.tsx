import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { WinnerType } from "../App";

interface CountdownWithResultProps {
  isWaiting: boolean;
  winner: WinnerType;
}

const words = ["Rock...", "Paper...", "Scissors!"];

const formatResult = (winner: WinnerType): string => {
  switch (winner) {
    case "player":
      return "🎉 You win this round!";
    case "computer":
      return "😢 Computer wins this round!";
    case "tie":
      return "🤝 It's a tie!";
    default:
      return "";
  }
};

function CountdownWithResult({ isWaiting, winner }: CountdownWithResultProps) {
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    if (!isWaiting) {
      setStep(words.length);
      return;
    }

    setStep(0);
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev >= words.length - 1) {
          clearInterval(interval);
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isWaiting]);

  if (!winner && !isWaiting) return null;

  return (
    <Typography
      variant="h5"
      fontWeight="bold"
      textAlign="center"
      sx={{ fontSize: { xs: "1rem", sm: "1.25rem" }, mt: 2 }}
    >
      {isWaiting ? words.slice(0, step + 1).join("") : formatResult(winner)}
    </Typography>
  );
}

export default CountdownWithResult;
