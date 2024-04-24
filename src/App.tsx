import DateCounter from "./Components/DateCounter";
import { AppContainer, GlobalStyle, Root } from "./App.styled";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
    return (
        <Root>
            <GlobalStyle />
            <AppContainer>
                <Header />

                <Main>
                    <p>1/15</p>
                    <p>Question?</p>
                </Main>
            </AppContainer>
            <DateCounter />
        </Root>
        // <div>
        //     <DateCounter />
        // </div>
    );
}

export default App;
