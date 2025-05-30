import { Typography, Stack } from "@mui/material";
import { OptionType } from "../App";
import "./Option.css";

interface OptionProps {
  value: OptionType;
  emoji: string;
  onClick: (value: OptionType) => void;
  size?: string;
  backgroundColor?: string;
  disabled: boolean;
}

const Option = ({
  value,
  emoji,
  onClick,
  size = "4rem",
  backgroundColor = "transparent",
  disabled = false,
}: OptionProps) => {
  return (
    <Stack
      className="option-button"
      sx={{
        backgroundColor: backgroundColor,
        borderRadius: "4px",
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        flex: 1,
        p: 2,
      }}
      onClick={() => !disabled && onClick(value)}
    >
      <Typography sx={{ fontSize: size }}>{emoji}</Typography>
      <Typography
        variant="subtitle1"
        sx={{ fontSize: "1rem", fontWeight: "bold" }}
      >
        {value}{" "}
      </Typography>
    </Stack>
  );
};

export default Option;
