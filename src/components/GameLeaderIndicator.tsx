import { Typography, Box } from "@mui/material";

interface GameLeaderIndicatorProps {
  scores: {
    player: number;
    computer: number;
  };
}

function GameLeaderIndicator({ scores }: GameLeaderIndicatorProps) {
  let message = "It's a tie!";
  let bgColor = "rgba(0, 0, 0, 0.05)";
  let textColor = "text.secondary";

  if (scores.player > scores.computer) {
    message = "You are winning";
    bgColor = "rgba(76, 175, 80, 0.1)";
    textColor = "#388e3c";
  } else if (scores.computer > scores.player) {
    message = "Computer is leading";
    bgColor = "rgba(244, 67, 54, 0.1)";
    textColor = "#d32f2f";
  }

  if (scores.computer === 0 && scores.player === 0) return;

  return (
    <Box
      sx={{
        display: "inline-block",
        backgroundColor: bgColor,
        color: textColor,
        py: 1,
        px: 2,
        borderRadius: "10px",
        fontSize: "0.75rem",
        fontWeight: 500,
        mt: 1,
      }}
    >
      <Typography variant="subtitle1">{message}</Typography>
    </Box>
  );
}

export default GameLeaderIndicator;
