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

/* Continue defining styled components for each CSS block */
