import styled from "styled-components";

const ErrorP = styled.p`
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 2rem;
    background-color: #495057;
    border-radius: 100px;
`;

function ErrorComponent() {
    return (
        <ErrorP>
            <span>💥</span> There was an error fecthing questions.
        </ErrorP>
    );
}

export default ErrorComponent;
