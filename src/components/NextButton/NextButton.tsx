import { StyledButton } from "../../App.styled";
import { NextButtonProps } from "./NextButton.static";

function NextButton({ dispatch, answer }: NextButtonProps) {
    if (answer === null) return null;

    return (
        <StyledButton className="btn-ui" onClick={() => dispatch({ type: "nextQuestion" })}>
            Next
        </StyledButton>
    );
}

export default NextButton;
