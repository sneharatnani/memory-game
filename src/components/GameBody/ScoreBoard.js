export default function ScoreBoard(props) {
  const { currentScore, bestScore } = props;
  return (
    <section className="mb-6 md:mb-8">
      <div className="bg-yellow-500 text-white font-bold inline-block py-2 w-36 rounded-2xl mr-4">
        current score: {currentScore}
      </div>
      <div className="bg-violet-500 text-white font-bold inline-block py-2 w-36 rounded-2xl">
        best score: {bestScore}
      </div>
    </section>
  );
}
