import styled, { createGlobalStyle } from "styled-components";

export const Root = styled.div``;

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-darkest: #343a40;
    --color-dark: #495057;
    --color-medium: #ced4da;
    --color-light: #f1f3f5;
    --color-theme: #1098ad;
    --color-accent: #ffa94d;
  }


  html {
    font-size: 62.5%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  body {
    min-height: 100vh;
    color: var(--color-light);
    background-color: var(--color-darkest);
    padding: 3.2rem;
  }


`;

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.header`
    width: 66rem;
    margin-bottom: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Error = styled.div`
    /* Error styles */
`;

export const StyledImg = styled.img`
    width: 14rem;
`;

export const StyledH1 = styled.h1`
    font-family: "Codystar";
    font-size: 5.6rem;
`;

export const StyledButton = styled.button`
    display: block;
    font-family: inherit;
    color: inherit;
    font-size: 2rem;
    border: 2px solid var(--color-dark);
    background-color: var(--color-dark);
    padding: 1.2rem 2.4rem;
    cursor: pointer;
    border-radius: 100px;
    transition: 0.3s;

    &:not([disabled]):hover {
        background-color: var(--color-darkest);
    }

    &.btn-option:not([disabled]):hover {
        transform: translateX(1.2rem);
    }

    &:not([disabled]):hover {
        cursor: pointer;
    }

    &.btn-ui {
        float: right;
    }

    &.options {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        margin-bottom: 3.2rem;
    }

    &.btn-option {
        width: 100%;
        text-align: left;
    }

    &.btn-option.correct {
        background-color: var(--color-theme);
        border: 2px solid var(--color-theme);
        color: var(--color-light);
    }

    &.btn-option.wrong {
        background-color: var(--color-accent);
        border: 2px solid var(--color-accent);
        color: var(--color-darkest);
    }
`;

/* Continue defining styled components for each CSS block */
