import { Stack, Typography } from "@mui/material";
import { OptionType } from "../App";
import { OptionData, OPTIONS } from "./Options";
import ChoiceDisplay from "./ChoiceDisplay";


interface GameResultProps {
    playerChoice: OptionType | null
    computerChoice: OptionType | null;

}

function GameResult({ playerChoice, computerChoice }: GameResultProps) {


    const playerChoiceData = OPTIONS.find((option: OptionData) => option.value === playerChoice) || null;
    const computerChoiceData = OPTIONS.find((option: OptionData) => option.value === computerChoice) || null;

    if (!playerChoiceData || !computerChoiceData) {
        return null;
    }

    return (
        <Stack direction="row" alignItems="center" justifyContent="center" width="100%" sx={{ p: 3, backgroundColor: "var(--color-background-div)", borderRadius: '10px', mb: 3 }}>
            <ChoiceDisplay title="Your choice" backgroundColor={playerChoiceData.backgroundColor} emoji={playerChoiceData.emoji} />
            <Typography sx={{
                fontWeight: 'bold',
                fontSize: '2.5rem',
                mx: 2
            }}>VS</Typography>
            <ChoiceDisplay title="Computer choice" backgroundColor={computerChoiceData.backgroundColor} emoji={computerChoiceData.emoji} />
        </Stack>
    )
}

export default GameResult;
