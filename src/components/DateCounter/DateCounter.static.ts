export interface IncrementDecrementAction {
    type: "inc" | "dec";
}

export interface SetCountAction {
    type: "setCount";
    payload: number;
}

export interface SetStepAction {
    type: "setStep";
    payload: number;
}

export interface ResetAction {
    type: "reset";
}

export interface State {
    count: number;
    step: number;
}

export type Action = IncrementDecrementAction | SetCountAction | SetStepAction | ResetAction;
