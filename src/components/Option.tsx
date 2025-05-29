import { Typography, Stack } from "@mui/material";
import { OptionType } from "../App";
import './Option.css';

interface OptionProps {
    value: OptionType;
    emoji: string;
    onClick: (value: OptionType) => void;
    size?: string;
    backgroundColor?: string;
}

const Option = ({ value, emoji, onClick, size = "4rem", backgroundColor = "transparent", }: OptionProps) => {
    return (
        <Stack className="option-button" sx={{ backgroundColor: backgroundColor, borderRadius: "4px", padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', flex: 1 }} onClick={() => onClick(value)}>
            <Typography sx={{ fontSize: size }}>
                {emoji}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontSize: "1rem", fontWeight: "bold" }}>{value}  </Typography>
        </Stack>
    )
};

export default Option;
