import { Stack } from "@mui/material";
import Option from "./Option";
import { OptionType } from "../App";


interface OptionsProps {
    setScores: React.Dispatch<React.SetStateAction<{ player: number; computer: number }>>;
    setResultMessage: React.Dispatch<React.SetStateAction<string>>;
    setRound: React.Dispatch<React.SetStateAction<number>>;
}


type OptionData = {
    value: OptionType;
    emoji: string;
    backgroundColor: string;
};

const OPTIONS: OptionData[] = [
    { value: "rock", emoji: "👊", backgroundColor: "var(--color-rock-bg)" },
    { value: "paper", emoji: "🖐️", backgroundColor: "var(--color-paper-bg)" },
    { value: "scissors", emoji: "✌️", backgroundColor: "var(--color-scissors-bg)" },
];


function Options({ setScores, setResultMessage, setRound }: OptionsProps) {
    const determineWinner = (player: OptionType, computer: OptionType): "player" | "computer" | "tie" => {
        if (player === computer) return "tie";

        if (
            (player === "rock" && computer === "scissors") ||
            (player === "paper" && computer === "rock") ||
            (player === "scissors" && computer === "paper")
        ) {
            return "player";
        } else {
            return "computer";
        }
    };

    const handleClickOption = (option: OptionType) => {
        const randomChoice = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
        const winner = determineWinner(option, randomChoice.value);

        if (winner === "player") {
            setScores((prev) => ({ ...prev, player: prev.player + 1 }));
            setResultMessage("You win this round!");
        } else if (winner === "computer") {
            setScores((prev) => ({ ...prev, computer: prev.computer + 1 }));
            setResultMessage("Computer wins this round!");
        } else {
            setResultMessage("It's a tie!");
        }

        setRound((prev) => prev + 1);
    };
    return (
        <Stack direction="row" alignItems="center" justifyContent="center" sx={{ my: 4, gap: 2 }} width="100%">
            {OPTIONS.map((option) => (
                <Option value={option.value} emoji={option.emoji} onClick={() => handleClickOption(option.value)} backgroundColor={option.backgroundColor} />
            ))}
        </Stack>
    )
}

export default Options;
