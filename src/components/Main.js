import { useEffect, useState } from "react";
import ScoreBoard from "./GameBody/ScoreBoard.js";
import Modal from "./Modal.js";
import Card from "./GameBody/Card.js";

export default function Main() {
  // state to change the emoji
  const [allCards, setAllCards] = useState(shuffleArr());
  // keep record of the clicked emoji
  const [clicked, setClicked] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [result, setResult] = useState(false);

  // effect to update current score after every click
  useEffect(() => {
    setCurrentScore(clicked.length);
  }, [clicked]);

  // set best score after comparing between current and best score
  useEffect(() => {
    setBestScore((prevScore) =>
      currentScore > prevScore ? currentScore : prevScore
    );
  }, [currentScore]);

  // check if current score is 12 and if so setResult to true
  useEffect(() => {
    if (currentScore === 12) {
      setResult(true);
    }
  }, [currentScore]);

  function shuffleArr() {
    const emojiArray = [
      { emoji: "😂", id: "img1" },
      { emoji: "😍", id: "img2" },
      { emoji: "😊", id: "img3" },
      { emoji: "😭", id: "img4" },
      { emoji: "🥰", id: "img5" },
      { emoji: "😎", id: "img6" },
      { emoji: "😉", id: "img7" },
      { emoji: "🤔", id: "img8" },
      { emoji: "😋", id: "img9" },
      { emoji: "😇", id: "img10" },
      { emoji: "😜", id: "img11" },
      { emoji: "😒", id: "img12" },
    ];
    for (let i = emojiArray.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));
      const temp = emojiArray[i];
      emojiArray[i] = emojiArray[random];
      emojiArray[random] = temp;
    }
    return emojiArray;
  }

  // handle click on emoji
  function handleClick(id) {
    if (clicked.includes(id)) {
      setResult(true);
    } else {
      setClicked((prev) => [...prev, id]);
      setAllCards(shuffleArr());
    }
  }
  // create array of card components
  const cards = allCards.map((card) => (
    <Card key={card.id} {...card} handleClick={handleClick} />
  ));

  // reset game
  function restartGame() {
    setCurrentScore(0);
    setClicked([]);
    setResult(false);
  }

  return (
    <main className="mx-auto p-4 md:w-3/4 lg:w-3/5">
      <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
      <section className="grid grid-cols-2 gap-4 justify-items-center md:grid-cols-3 lg:gap-y-6">
        {cards}
      </section>
      {result && <Modal score={currentScore} resetGame={restartGame} />}
      {result && (
        <div className="fixed z-10 top-0 bottom-0 left-0 right-0 w-full h-full bg-black opacity-70"></div>
      )}
    </main>
  );
}
