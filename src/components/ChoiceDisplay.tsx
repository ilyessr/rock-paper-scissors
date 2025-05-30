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
      justifyContent="center"
      width="100%"
    >
      <Typography variant="h5" sx={{ my: 1, fontWeight: "bold" }}>
        {title}
      </Typography>

      <Box
        sx={{
          background: backgroundColor,
          borderRadius: "50%",
          width: "7rem",
          height: "7rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography fontSize="2.5rem">{emoji}</Typography>
      </Box>
    </Stack>
  );
}

export default ChoiceDisplay;
