import styled, { keyframes } from "styled-components";

// Styled component for the container
export const LoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    gap: 1.6rem;

    color: var(--color-medium);
    font-size: 1.4rem;
`;

// Keyframes animation definition
export const loaderAnimation = keyframes`
    20% {
        background-position: 0% 0%, 50% 50%, 100% 50%;
    }
    40% {
        background-position: 0% 100%, 50% 0%, 100% 50%;
    }
    60% {
        background-position: 0% 50%, 50% 100%, 100% 0%;
    }
    80% {
        background-position: 0% 50%, 50% 50%, 100% 100%;
    }
`;

// Styled component for the loader div with animation applied
export const LoaderDiv = styled.div`
    width: 50px;
    height: 24px;
    background: radial-gradient(circle closest-side, currentColor 90%, #0000) 0% 50%,
        radial-gradient(circle closest-side, currentColor 90%, #0000) 50% 50%,
        radial-gradient(circle closest-side, currentColor 90%, #0000) 100% 50%;
    background-size: calc(100% / 3) 12px;
    background-repeat: no-repeat;
    animation: ${loaderAnimation} 1s infinite linear; /* Applying keyframes animation */
`;
