import { IconButton, Stack, Typography } from "@mui/material"
import RestartAltIcon from '@mui/icons-material/RestartAlt';

interface ScoreBoardProps {
    userScore: number

    computerScore: number
    handleReset: () => void
}

function ScoreBoard({ userScore = 0, computerScore = 0, handleReset }: ScoreBoardProps) {
    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%" sx={{ p: 2, backgroundColor: "var(--color-background-div)", borderRadius: '10px', mb: 3 }}>
            <Stack direction="row" alignContent="center" alignItems="center">
                <Stack alignItems="center">
                    <Typography sx={{ fontSize: '2rem', fontWeight: 'bold' }}>
                        {userScore}
                    </Typography>
                    <Typography sx={{ fontSize: '1rem', color: 'text.secondary' }}>
                        You
                    </Typography>
                </Stack>
                <Stack>
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        mx: 2
                    }}>VS</Typography>

                </Stack>

                <Stack alignItems="center">
                    <Typography sx={{ fontSize: '2rem', fontWeight: 'bold' }}>
                        {computerScore}
                    </Typography>
                    <Typography sx={{ fontSize: '1rem', color: 'text.secondary' }}>
                        Computer
                    </Typography>
                </Stack>
            </Stack>

            <Stack alignContent="center">
                <IconButton onClick={handleReset} color="secondary" sx={{ borderRadius: '10px' }}>
                    <RestartAltIcon />
                </IconButton>
            </Stack>
        </Stack>
    )
}


export default ScoreBoard