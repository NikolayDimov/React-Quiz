import { Question } from "../../App.static";
import Options from "./Options/Options";

function QuizQuestion({ question }: { question: Question }) {
    console.log(question.question);

    return (
        <div>
            <h4> {question.question}</h4>
            <Options question={question} />
        </div>
    );
}

export default QuizQuestion;
