import { Action } from "../../App.static";

export interface FinishProps {
    points: number;
    maxPossiblePoints: number;
    highscore: number;
    dispatch: (action: Action) => void;
}
