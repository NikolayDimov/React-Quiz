import { Action, Question } from "../../App.static";

export interface QuizQuestionProps {
    question: Question;
    dispatch: (action: Action) => void;
    answer: number | null;
}
