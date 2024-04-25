import { useEffect } from "react";
import { TimerDiv } from "./Timer.style";
import { TimerProps } from "./Timer.static";

function Timer({ dispatch, secondsRemaining }: TimerProps) {
    let mins = 0;
    let seconds = 0;

    if (secondsRemaining !== null) {
        mins = Math.floor(secondsRemaining / 60);
        seconds = secondsRemaining % 60;
    }

    useEffect(
        function () {
            const timer = setInterval(function () {
                dispatch({ type: "clockTick" });
            }, 1000);

            return () => clearInterval(timer);
        },
        [dispatch]
    );

    return (
        <TimerDiv>
            {mins < 10 && "0"}
            {mins}:{seconds < 10 && "0"}
            {seconds}
        </TimerDiv>
    );
}

export default Timer;
