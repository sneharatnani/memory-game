export default function Modal(props) {
  const { score, resetGame } = props;
  return (
    <div className="capitalize absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 rounded-2xl z-20 w-64 h-36 flex flex-col items-center justify-center text-lg">
      <p>{score < 12 ? "ohh you lost" : "wow! you won"}</p>
      <p>your score is {score}</p>
      <button
        className="bg-black text-white py-2 px-4 rounded-xl capitalize mt-4"
        onClick={resetGame}
      >
        Play again
      </button>
    </div>
  );
}
