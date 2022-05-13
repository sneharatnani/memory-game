export default function ScoreBoard(props) {
  const { currentScore, bestScore } = props;
  return (
    <section className="mb-6 md:mb-8 lg:mb-12 capitalize">
      <div className="bg-yellow-500 text-white font-bold inline-block py-2 w-36 rounded-2xl mr-4 shadow-md shadow-yellow-600">
        current score: {currentScore}
      </div>

      <div className="bg-violet-500 text-white font-bold inline-block py-2 w-36 rounded-2xl shadow-md shadow-violet-700">
        best score: {bestScore}
      </div>
    </section>
  );
}
