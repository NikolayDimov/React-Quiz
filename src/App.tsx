// import DateCounter from "./Components/DateCounter";
import { AppContainer, GlobalStyle, Root } from "./App.styled";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useEffect, useReducer } from "react";
import Loader from "./components/Loader/Loader";

import StartScreen from "./components/StartScreen/StartScreen";
import ErrorComponent from "./components/ErrorComponent/ErrorComponent";
import { Action, State } from "./App.static";
import QuizQuestion from "./components/QuizSection/QuizQuestion";

const initialState = {
    questions: [],

    // 'loading', 'error', 'ready', 'active', 'finished'
    status: "loading",
    index: 0,
};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "dataReceived":
            return { ...state, questions: action.payload, status: "ready" };
        case "dataFailed":
            return { ...state, status: "error" };
        case "start":
            return { ...state, status: "active" };
        default:
            throw new Error("Unknow action");
    }
}

function App() {
    const [{ questions, status, index }, dispatch] = useReducer(reducer, initialState);

    const numQuestions = questions.length;

    useEffect(function () {
        fetch("http://localhost:9000/questions")
            .then((res) => res.json())
            .then((data) => dispatch({ type: "dataReceived", payload: data }))
            .catch((err) => dispatch({ type: "dataFailed", payload: err }));
    }, []);

    return (
        <Root>
            <GlobalStyle />
            <AppContainer>
                <Header />

                <Main>
                    {status === "loading" && <Loader />}
                    {status === "error" && <ErrorComponent />}
                    {status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
                    {status === "active" && <QuizQuestion question={questions[index]} />}
                </Main>
            </AppContainer>
        </Root>
        // <div>
        //     <DateCounter />
        // </div>
    );
}

export default App;
