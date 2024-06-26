import styled from "styled-components";

export const Result = styled.p`
    background-color: var(--color-theme);
    color: var(--color-light);
    border-radius: 100px;
    text-align: center;
    padding: 2rem 0;
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1.6rem;

    &span {
        font-size: 2.2rem;
        margin-right: 4px;
    }
`;

export const HighScore = styled.p`
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 4.8rem;
`;
