import styled from "styled-components";

const HeaderDiv = styled.header`
    width: 66rem;
    margin-bottom: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const H1 = styled.h1`
    font-family: "Codystar";
    font-size: 5.6rem;
`;

function Header() {
    return (
        <HeaderDiv>
            <img src="logo512.png" alt="React logo" />
            <H1>The React Quiz</H1>
        </HeaderDiv>
    );
}

export default Header;
