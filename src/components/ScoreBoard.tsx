import { IconButton, Stack, Typography } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useEffect, useState } from "react";
import { WinnerType } from "../App";
import GameLeaderIndicator from "./GameLeaderIndicator";

interface ScoreBoardProps {
  winner: WinnerType;
  resetChoices: () => void;
}

function ScoreBoard({ winner, resetChoices }: ScoreBoardProps) {
  const [scores, setScores] = useState<{ player: number; computer: number }>({
    player: 0,
    computer: 0,
  });

  const handleReset = () => {
    resetChoices();
    setScores({ player: 0, computer: 0 });
  };

  useEffect(() => {
    if (winner === "computer") {
      setScores((prev) => ({ ...prev, computer: prev.computer + 1 }));
    } else if (winner === "player") {
      setScores((prev) => ({ ...prev, player: prev.player + 1 }));
    }
  }, [winner]);

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      sx={{
        p: 2,
        backgroundColor: "var(--color-background-div)",
        borderRadius: "10px",
        mb: 3,
      }}
    >
      <Stack direction="row" alignContent="center" alignItems="center">
        <Stack alignItems="center">
          <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>
            {scores.player}
          </Typography>
          <Typography sx={{ fontSize: "1rem", color: "text.secondary" }}>
            You
          </Typography>
        </Stack>
        <Stack>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              mx: 2,
            }}
          >
            VS
          </Typography>
        </Stack>
        <Stack alignItems="center">
          <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>
            {scores.computer}
          </Typography>
          <Typography sx={{ fontSize: "1rem", color: "text.secondary" }}>
            Computer
          </Typography>
        </Stack>
      </Stack>

      <Stack direction="row" alignContent="center" gap={2}>
        <GameLeaderIndicator scores={scores} />
        <IconButton
          onClick={handleReset}
          color="secondary"
          sx={{ borderRadius: "10px" }}
        >
          <RestartAltIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}

export default ScoreBoard;
