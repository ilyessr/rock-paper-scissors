import { Stack, Typography } from "@mui/material";
import { OptionType, WinnerType } from "../App";
import { OptionData, OPTIONS } from "./Options";
import ChoiceDisplay from "./ChoiceDisplay";
import CountdownWithResult from "./CountdownWithResult";

interface GameResultProps {
  playerChoice: OptionType;
  computerChoice: OptionType;
  winner: WinnerType;
  isWaiting: boolean;
}

function GameResult({
  playerChoice,
  computerChoice,
  winner,
  isWaiting,
}: GameResultProps) {
  const playerChoiceData =
    OPTIONS.find((option: OptionData) => option.value === playerChoice) || null;
  const computerChoiceData =
    OPTIONS.find((option: OptionData) => option.value === computerChoice) ||
    null;

  return (
    <Stack
      sx={{
        p: 3,
        backgroundColor: "var(--color-background-div)",
        borderRadius: "10px",
        mb: 3,
      }}
      alignItems="center"
      width="100%"
    >
      <Stack direction="row" alignItems="center" justifyContent="center">
        <ChoiceDisplay
          title="You"
          backgroundColor={playerChoiceData?.backgroundColor || "lightgray"}
          emoji={playerChoiceData?.emoji || "❔"}
        />
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", sm: "2.5rem" },
            mx: 2,
          }}
        >
          VS
        </Typography>
        <ChoiceDisplay
          title="Computer"
          backgroundColor={computerChoiceData?.backgroundColor || "lightgray"}
          emoji={computerChoiceData?.emoji || "❔"}
        />
      </Stack>
      <CountdownWithResult winner={winner} isWaiting={isWaiting} />
    </Stack>
  );
}

export default GameResult;
