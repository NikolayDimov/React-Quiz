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
import NextButton from "./components/NextButton/NextButton";
import Progress from "./components/Progress/Progress";
import FinishScreen from "./components/FinishScreen/FinishScreen";
import Footer from "./components/Footer/Footer";
import Timer from "./components/Timer/Timer";

const SECS_PER_QUESTION = 30;

const initialState: State = {
    questions: [],
    status: "loading", // 'loading', 'error', 'ready', 'active', 'finished'
    index: 0,
    answer: null,
    points: 0,
    highscore: 0,
    secondsRemaining: null,
};

function reducer(state: State, action: Action): State {
    let question;

    switch (action.type) {
        case "dataReceived":
            return { ...state, questions: action.payload, status: "ready" };
        case "dataFailed":
            return { ...state, status: "error" };
        case "start":
            return { ...state, status: "active", secondsRemaining: state.questions.length * SECS_PER_QUESTION };
        case "answer":
            question = state.questions[state.index];
            return {
                ...state,
                answer: action.payload,
                points: action.payload === question.correctOption ? state.points + question.points : state.points,
            };
        case "nextQuestion":
            return { ...state, index: state.index + 1, answer: null };
        case "finish":
            return { ...state, status: "finished", highscore: state.points > state.highscore ? state.points : state.highscore };
        case "restart":
            return { ...initialState, questions: state.questions, status: "ready" }; // expand the entire inital state here and add questions back in
        // same as:
        // return { ...state, index: 0, answer: null, points: 0, highscore: 0, status: "ready" };
        case "clockTick":
            return {
                ...state,
                secondsRemaining: state.secondsRemaining !== null ? state.secondsRemaining - 1 : null,
                status: state.secondsRemaining === 0 ? "finished" : state.status,
            };
        default:
            throw new Error("Unknow action");
    }
}

function App() {
    const [{ questions, status, index, answer, points, highscore, secondsRemaining }, dispatch] = useReducer(reducer, initialState);

    const numQuestions = questions.length;
    const maxPossiblePoints = questions.reduce((prev, curr) => prev + curr.points, 0);

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
                    {status === "active" && (
                        <>
                            <Progress
                                index={index}
                                numQuestions={numQuestions}
                                points={points}
                                maxPossiblePoints={maxPossiblePoints}
                                answer={answer}
                            />
                            <QuizQuestion question={questions[index]} dispatch={dispatch} answer={answer} />
                            <Footer>
                                <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
                                <NextButton dispatch={dispatch} answer={answer} index={index} numQuestions={numQuestions} />
                            </Footer>
                        </>
                    )}
                    {status === "finished" && (
                        <FinishScreen points={points} maxPossiblePoints={maxPossiblePoints} highscore={highscore} dispatch={dispatch} />
                    )}
                </Main>
            </AppContainer>
        </Root>
        // <div>
        //     <DateCounter />
        // </div>
    );
}

export default App;
