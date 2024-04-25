import { Action } from "../../App.static";

export interface TimerProps {
    dispatch: (action: Action) => void;
    secondsRemaining: number | null;
}
