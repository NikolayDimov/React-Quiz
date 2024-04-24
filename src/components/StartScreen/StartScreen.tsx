import styled from "styled-components";
import { StyledButton } from "../../App.styled";
import { Action } from "../../App.static";

const StartScreenDeiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ButtonStart = styled(StyledButton)`
    float: right;
`;

interface StartScreenProps {
    numQuestions: number;
    dispatch: (action: Action) => void;
}

function StartScreen({ numQuestions, dispatch }: StartScreenProps) {
    return (
        <StartScreenDeiv>
            <h2>Welcome to the React Quiz!</h2>
            <h3>{numQuestions} qustions to test your React mastery</h3>
            <ButtonStart onClick={() => dispatch({ type: "start", payload: [] })}>Let's start</ButtonStart>
        </StartScreenDeiv>
    );
}

export default StartScreen;
