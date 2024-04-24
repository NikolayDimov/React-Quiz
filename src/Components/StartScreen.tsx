import styled from "styled-components";
import { StyledButton } from "../App.styled";

const StartScreenDeiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ButtonStart = styled(StyledButton)`
    float: right;
`;

interface StartScreenProps {
    numQuestions: number; // Specify the type as number
}

function StartScreen({ numQuestions }: StartScreenProps) {
    return (
        <StartScreenDeiv>
            <h2>Welcome to the React Quiz!</h2>
            <h3>{numQuestions} qustions to test your React mastery</h3>
            <ButtonStart>Let's start</ButtonStart>
        </StartScreenDeiv>
    );
}

export default StartScreen;
