'use client'
import { useState, useEffect } from 'react';
import styles from './MatchingCards.module.css';
import confetti from 'canvas-confetti'

export const MatchingCards = ({ cards, setCards, matchingCompleted, setMatchingCompleted }) => {
    const [selectedCards, setSelectedCards] = useState([])

    // Shuffle the cards array on first render
    useEffect(() => {
        let arr = [...cards]

        let currIndex = arr.length, randomIndex

        while (currIndex > 0) {
            randomIndex = Math.floor(Math.random() * currIndex)
            currIndex--

            [arr[currIndex], arr[randomIndex]] = [arr[randomIndex], arr[currIndex]]
        }

        setCards(arr)
    }, [])

    // Run this every time the cards array is updated
    useEffect(() => {
        // Set the selectedCards array to the cards that are currently flipped but not yet matched
        setSelectedCards(cards.filter(card => card.isFlipped && !card.isMatched))

        // Check if every card has been matched
        if (cards.every(card => card.isMatched)) {
            setMatchingCompleted(true)
            confetti()
        }
    }, [cards])

    // Run this code every time the selectedCards array is updated
    useEffect(() => {
        if (selectedCards.length > 1) {
            if (selectedCards[0].match === selectedCards[1].id) {
                setTimeout(() => {
                    const updatedCards = cards.map(card => (card.id === selectedCards[0].id || card.id === selectedCards[1].id) ? { ...card, isMatched: true } : card)

                    setCards(updatedCards)
                }, 1000)

            } else {
                setTimeout(() => {
                    const updatedCards = cards.map(card => (card.isFlipped && !card.Matched) ? { ...card, isFlipped: false } : card)
                    setCards(updatedCards)
                }, 1000)

            }
        }
    }, [selectedCards])

    const handleCardFlip = (card) => {
        if (!card.isMatched) {
            if (card.isFlipped) {
                const updatedCards = cards.map(c => c.id === card.id ? { ...c, isFlipped: !c.isFlipped } : c)
                setCards(updatedCards)
            } else {
                if (selectedCards.length < 2) {
                    const updatedCards = cards.map(c => c.id === card.id ? { ...c, isFlipped: !c.isFlipped } : c)
                    setCards(updatedCards)
                }
            }
        }
    }

    return (
        <section className='border border-info rounded-xl p-2'>
            {matchingCompleted === true ? (
                <div className='flex flex-col items-center p-8 gap-8'>
                    <h3 className="font-semibold text-2xl text-success">Game Complete ✓</h3>
                    <a href="/" className='btn'>BACK TO HOME</a>
                </div>
            ) : (
                matchingCompleted === false ? (
                    <div className='flex flex-wrap justify-center gap-3'>
                        {cards.map(card => (
                            <div key={card.id} className={`${styles.scene}`}>
                                <div className={`${styles.card} ${card.isFlipped ? styles.flipped : ''} ${card.isMatched ? styles.matched : ''}`} onClick={() => handleCardFlip(card)}>
                                    <figure className={`${styles.cardFace} ${styles.front}`}>
                                        {/* <img src="/images/cardGameImages/card-front.png" className='rounded-lg' /> */}
                                    </figure>

                                    <div className={`${styles.cardFace} ${styles.back}`}>
                                        {card.isImage ? <img src={card.imagePath} alt="" className='rounded-lg' /> : <p className='h-full p-1 text-center flex justify-center items-center'>{card.text}</p>}

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                ) : (
                    <div className='text-center'>
                        <span className="loading loading-spinner loading-lg text-primary"></span>
                    </div>
                )
            )}


        </section>

    )
}