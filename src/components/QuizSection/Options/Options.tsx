import { StyledButton } from "../../../App.styled";
import { QuizQuestionProps } from "../QuizQuestion.static";
import { OptionDiv } from "./Options.style";

function Options({ question, dispatch, answer }: QuizQuestionProps) {
    const hasAnswered = answer !== null;

    return (
        <OptionDiv>
            {question.options.map((option, index) => (
                <StyledButton
                    className={`btn-option ${index === answer ? "answer" : ""} ${
                        hasAnswered ? (index === question.correctOption ? "correct" : "wrong") : ""
                    }`}
                    key={option}
                    disabled={hasAnswered}
                    onClick={() => dispatch({ type: "answer", payload: index })}
                >
                    {option}
                </StyledButton>
            ))}
        </OptionDiv>
    );
}

export default Options;
