import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";
export default function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const timerID = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(timerID);
  }, [dispatch]);

  return (
    <div className='timer'>
      {mins < 10 && 0}
      {mins}:{seconds < 10 && 0}
      {seconds}
    </div>
  );
}
