export default function FinishedScreen({
  points,
  maxPoints,
  highscore,
  dispatch,
}) {
  const percentage = (points / maxPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "👍";
  if (percentage >= 1 && percentage < 50) emoji = "🤔";
  if (percentage === 0) emoji = "🤦";
  return (
    <>
      <p className='result'>
        {emoji} You scroed <strong>{points}</strong> out of {maxPoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className='highscore'>(Highscore: {highscore} points)</p>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: "restart" })}>
        Restart
      </button>
    </>
  );
}
