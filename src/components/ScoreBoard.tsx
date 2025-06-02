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
      position="relative"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        py: { xs: 2, sm: 4 },
        px: { xs: 2, sm: 4 },
        backgroundColor: "var(--color-background-div)",
        borderRadius: "10px",
        mb: 3,
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent={{ xs: "center", sm: "space-between" }}
        alignItems="center"
        width="100%"
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
        <GameLeaderIndicator scores={scores} />
      </Stack>

      <IconButton
        onClick={handleReset}
        color="secondary"
        sx={{
          position: "absolute",
          right: 10,
          top: 10,
          borderRadius: "10px",
        }}
      >
        <RestartAltIcon />
      </IconButton>
    </Stack>
  );
}

export default ScoreBoard;
