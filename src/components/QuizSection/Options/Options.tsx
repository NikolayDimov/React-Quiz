import { Question } from "../../../App.static";
import { StyledButton } from "../../../App.styled";
import { OptionDiv } from "./Options.style";

function Options({ question }: { question: Question }) {
    return (
        <OptionDiv>
            {question.options.map((option) => (
                <StyledButton className="btn-option" key={option}>
                    {option}
                </StyledButton>
            ))}
        </OptionDiv>
    );
}

export default Options;
