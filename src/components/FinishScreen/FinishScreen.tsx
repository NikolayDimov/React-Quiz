import { StyledButton } from "../../App.styled";
import { FinishProps } from "./FinishScreen.static";
import { HighScore, Result } from "./FinishScreen.style";

function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }: FinishProps) {
    const percentage = (points / maxPossiblePoints) * 100;

    let emoji;
    if (percentage === 100) emoji = "🥇";
    if (percentage >= 80 && percentage < 100) emoji = "🥈";
    if (percentage >= 50 && percentage < 80) emoji = "🥉";
    if (percentage >= 0 && percentage < 50) emoji = "🎖️";
    if (percentage === 0) emoji = "👎";

    return (
        <>
            <Result>
                <span>{emoji}</span> You scored <strong>{points}</strong> out of {maxPossiblePoints} ({Math.ceil(percentage)}%)
            </Result>
            <HighScore>(HighScore: {highscore} points)</HighScore>
            <StyledButton className="btn-ui" onClick={() => dispatch({ type: "restart" })}>
                Restart Quiz
            </StyledButton>
        </>
    );
}

export default FinishScreen;
