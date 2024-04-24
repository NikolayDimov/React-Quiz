import { ProgressProps } from "./Progress.static";
import { ProgressWrapper } from "./Progress.style";

function Progress({ index, numQuestions, points, maxPossiblePoints, answer }: ProgressProps) {
    return (
        <ProgressWrapper>
            <progress max={numQuestions} value={index + Number(answer !== null)} />
            <p>
                Question <strong>{index + 1}</strong> / {numQuestions}
            </p>
            <p>
                <strong>{points}</strong> / {maxPossiblePoints}
            </p>
        </ProgressWrapper>
    );
}

export default Progress;
