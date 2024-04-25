import Options from "./Options/Options";
import { QuizQuestionProps } from "./QuizQuestion.static";

function QuizQuestion({ question, dispatch, answer }: QuizQuestionProps) {
    // console.log(question);

    return (
        <div>
            <h4> {question.question}</h4>
            <Options question={question} dispatch={dispatch} answer={answer} />
        </div>
    );
}

export default QuizQuestion;
