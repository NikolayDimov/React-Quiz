import { Action } from "../../App.static";

export interface NextButtonProps {
    dispatch: (action: Action) => void;
    answer: number | null;
}
