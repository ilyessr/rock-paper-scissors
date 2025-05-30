import { Stack } from "@mui/material";
import Option from "./Option";
import { OptionType } from "../App";

interface OptionsProps {
  playRound: (option: OptionType) => void;
  isWaiting: boolean;
}

export type OptionData = {
  value: OptionType;
  emoji: string;
  backgroundColor: string;
};

export const OPTIONS: OptionData[] = [
  { value: "rock", emoji: "👊", backgroundColor: "var(--color-rock-bg)" },
  { value: "paper", emoji: "🖐️", backgroundColor: "var(--color-paper-bg)" },
  {
    value: "scissors",
    emoji: "✌️",
    backgroundColor: "var(--color-scissors-bg)",
  },
];

function Options({ playRound, isWaiting }: OptionsProps) {
  const handleClickOption = (option: OptionType) => {
    playRound(option);
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ mb: 4, gap: 2 }}
      width="100%"
    >
      {OPTIONS.map((option) => (
        <Option
          value={option.value}
          emoji={option.emoji}
          onClick={() => handleClickOption(option.value)}
          backgroundColor={option.backgroundColor}
          disabled={isWaiting}
        />
      ))}
    </Stack>
  );
}

export default Options;
