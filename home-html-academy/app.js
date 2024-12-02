import React, { useState } from 'react';

const App = () => {
    const [cards, setCards] = useState(data);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);

    const handleCardClick = (index) => {
        if (flippedCards.length < 2 && !flippedCards.includes(index)) {
            setFlippedCards([...flippedCards, index]);

            if (flippedCards.length === 1) {
                const [firstIndex] = flippedCards;
                if (cards[firstIndex].id === cards[index].id) {
                    setMatchedCards([...matchedCards, firstIndex, index]);
                }
                setTimeout(() => setFlippedCards([]), 1000);
            }
        }
    };

    return (
        <div className="game-board">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    card={card}
                    isFlipped={flippedCards.includes(index)}
                    isMatched={matchedCards.includes(index)}
                    onClick={() => handleCardClick(index)}
                />
            ))}
        </div>
    );
};
