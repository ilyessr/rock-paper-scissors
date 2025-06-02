import { Stack, Typography, Box } from "@mui/material";

interface ChoiceDisplayProps {
  title: string;
  emoji: string;
  backgroundColor: string;
}

function ChoiceDisplay({ title, emoji, backgroundColor }: ChoiceDisplayProps) {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
    >
      <Typography
        variant="h5"
        sx={{
          my: 1,
          fontSize: { xs: "1rem", sm: "1.25rem" },
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          background: backgroundColor,
          borderRadius: "50%",
          width: { xs: "5rem", sm: "7rem" },
          height: { xs: "5rem", sm: "7rem" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography fontSize={{ xs: "1.5rem", sm: "2.5rem" }}>
          {emoji}
        </Typography>
      </Box>
    </Stack>
  );
}

export default ChoiceDisplay;
