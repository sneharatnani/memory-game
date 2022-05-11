export default function ScoreBoard(props) {
  const { currentScore, bestScore } = props;
  return (
    <section>
      <div>current score: {currentScore}</div>
      <div>best score: {bestScore}</div>
    </section>
  );
}
