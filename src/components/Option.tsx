import { Typography, Stack } from "@mui/material";
import { OptionType } from "../App";

interface OptionProps {
  value: OptionType;
  emoji: string;
  onClick: (value: OptionType) => void;
  backgroundColor?: string;
  disabled: boolean;
}

const Option = ({
  value,
  emoji,
  onClick,
  backgroundColor = "transparent",
  disabled = false,
}: OptionProps) => {
  return (
    <Stack
      sx={{
        width: { xs: "100%", sm: "auto" },
        minHeight: "100px",
        backgroundColor: backgroundColor,
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        flex: 1,
        p: { xs: 1, sm: 2 },
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
      onClick={() => !disabled && onClick(value)}
    >
      <Typography sx={{ fontSize: { xs: "2rem", sm: "4rem" } }}>
        {emoji}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: "1rem",
          fontWeight: "bold",
          display: { xs: "none", sm: "block" },
        }}
      >
        {value}{" "}
      </Typography>
    </Stack>
  );
};

export default Option;
