import { StyledButton } from "../../App.styled";
import { NextButtonProps } from "./NextButton.static";

function NextButton({ dispatch, answer, index, numQuestions }: NextButtonProps) {
    if (answer === null) return null;

    if (index < numQuestions - 1)
        return (
            <StyledButton className="btn-ui" onClick={() => dispatch({ type: "nextQuestion" })}>
                Next
            </StyledButton>
        );

    if (index === numQuestions - 1)
        return (
            <StyledButton className="btn-ui" onClick={() => dispatch({ type: "finish" })}>
                Finish
            </StyledButton>
        );
}

export default NextButton;
