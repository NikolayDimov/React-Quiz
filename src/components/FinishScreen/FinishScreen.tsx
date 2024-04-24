import { FinishProps } from "./FinishScreen.static";

function FinishScreen({ points, maxPossiblePoints }: FinishProps) {
    const percentage = (points / maxPossiblePoints) * 100;

    return (
        <p>
            You scored <strong>{points}</strong> out of {maxPossiblePoints} ({Math.ceil(percentage)})
        </p>
    );
}

export default FinishScreen;
