export interface DataRecievedProps {
    type: "dataReceived";
    payload: [];
}

export interface DataFailedProps {
    type: "dataFailed";
    payload: [];
}
export interface StartProps {
    type: "start";
    payload: [];
}

export interface AnswerProps {
    type: "answer";
    payload: number;
}

export interface NextQuestionProps {
    type: "nextQuestion";
}

export interface FinishProps {
    type: "finish";
}

export interface RestartProps {
    type: "restart";
}

export interface ClockTickProps {
    type: "clockTick";
}

export interface Question {
    question: string;
    options: string[];
    correctOption: number;
    points: number;
    id: string;
}

export interface State {
    questions: Question[];
    status: string;
    index: number;
    answer: number | null;
    points: number;
    highscore: number;
    secondsRemaining: number | null;
}

export type Action =
    | DataRecievedProps
    | DataFailedProps
    | StartProps
    | AnswerProps
    | NextQuestionProps
    | FinishProps
    | RestartProps
    | ClockTickProps;
