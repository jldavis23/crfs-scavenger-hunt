'use client'
import { useState, useEffect } from 'react';
import styles from './MatchingCards.module.css';
import confetti from 'canvas-confetti'

export const MatchingCards = ({ cards, matchingCompleted, setMatchingCompleted }) => {
    const [selectedCards, setSelectedCards] = useState([])
    const [allCards, setAllCards] = useState(cards.map(card => ({ ...card, isMatched: false })))

    useEffect(() => {
        if (selectedCards.length === 2) {
            if (selectedCards[0].match === selectedCards[1].id) {
                const newCards = allCards.map(card => card.id === selectedCards[0].id || card.id === selectedCards[1].id ? { ...card, isMatched: true } : card)

                setTimeout(() => {
                    setAllCards(newCards)
                    setSelectedCards([])
                }, 1000)
            } else {
                console.log('cards DO NOT MATCH AAAA')
                setTimeout(() => {
                    setSelectedCards([])
                }, 1000)
            }
        }
    }, [selectedCards])

    const handleCardFlip = (cardId, cardMatch) => {
        if (selectedCards.length < 2) {
            setSelectedCards([...selectedCards, { id: cardId, match: cardMatch }])
        }
    }

    return (
        <section className='grid grid-rows-4 grid-cols-3 gap-3'>
            {/* {cards.map(card => (
                <div key={card.id} className={styles.scene}>
                    <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
                        <figure className={`${styles.cardFace} ${styles.front}`}>
                            <img src="/images/cardGameImages/card-front.png" />
                        </figure>

                        <div className={`${styles.cardFace} ${styles.back}`}>
                            <img src={card.imagePath} alt="" />
                        </div>
                    </div>
                </div>
            ))} */}

            {allCards.map(card => (
                <div key={card.id} className='hover:cursor-pointer rounded-lg border-2 border-info ' onClick={() => handleCardFlip(card.id, card.match)}>
                    {selectedCards.some(c => c.id === card.id) ? (
                        card.isImage ? <img src={card.imagePath} alt='' className='rounded-lg' /> : <p>{card.text}</p>
                    ) : (
                        <img src='/images/cardGameImages/card-front.png' alt='' className='rounded-lg' />
                    )}

                </div>

            ))}
        </section>

    )
}