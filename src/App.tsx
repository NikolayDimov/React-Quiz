import DateCounter from "./Components/DateCounter";
import { AppContainer, GlobalStyle, Root } from "./App.styled";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { useEffect, useReducer } from "react";

interface DataRecievedProps {
    type: "dataReceived";
    payload: [];
}

interface DataFailedProps {
    type: "dataFailed";
    // payload: [];
}

interface Question {
    question: string;
}

interface State {
    questions: Question[];
    status: string;
}

type Action = DataRecievedProps | DataFailedProps;

const initialState = {
    questions: [],

    // 'loading', 'error', 'ready', 'active', 'finished'
    status: "loading",
};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "dataReceived":
            return { ...state, questions: action.payload, status: "ready" };
        case "dataFailed":
            return { ...state, status: "error" };
        default:
            throw new Error("Unknow action");
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(function () {
        fetch("http://localhost:9000/questions")
            .then((res) => res.json())
            .then((data) => dispatch({ type: "dataReceived", payload: data }))
            .catch((error) => dispatch({ type: "dataFailed" }));
    }, []);

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
