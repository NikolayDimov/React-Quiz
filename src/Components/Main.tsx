import React from "react";
import styled from "styled-components";

const MainDiv = styled.main`
    width: 50rem;
`;

interface MainProps {
    children: React.ReactNode;
}

function Main({ children }: MainProps) {
    return <MainDiv>{children}</MainDiv>;
}

export default Main;
