import styled from "styled-components";
import { MainProps } from "./Main.static";

const MainDiv = styled.main`
    width: 50rem;
`;

function Main({ children }: MainProps) {
    return <MainDiv>{children}</MainDiv>;
}

export default Main;
