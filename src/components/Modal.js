export default function Modal(props) {
  const { score, resetGame } = props;
  return (
    <div className="modal">
      <p>your score is {score}</p>
      <p>{score < 12 ? "ohh you lost" : "wow! you won"}</p>
      <button onClick={resetGame}>Play again</button>
    </div>
  );
}
