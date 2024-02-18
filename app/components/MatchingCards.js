'use client'
import { useState, useEffect } from 'react';
import styles from './MatchingCards.module.css';
import confetti from 'canvas-confetti'

export const MatchingCards = ({ cards, setCards, matchingCompleted, setMatchingCompleted }) => {
    const [selectedCards, setSelectedCards] = useState([])

    useEffect(() => {
        setSelectedCards(cards.filter(card => card.isFlipped))
    }, [cards])

    useEffect(() => {
        if (selectedCards.length > 1) {
            if (selectedCards[0].match === selectedCards[1].id) {
                console.log('MATCH!')
            } else {
                console.log('no match...')
            }
        }
    }, [selectedCards])

    const handleCardFlip = (card) => {
        if (card.isFlipped) {
            const updatedCards = cards.map(c => c.id === card.id ? {...c, isFlipped: !c.isFlipped} : c)
            setCards(updatedCards)
        } else {
            if (selectedCards.length < 2) {
                const updatedCards = cards.map(c => c.id === card.id ? {...c, isFlipped: !c.isFlipped} : c)
                setCards(updatedCards)
            } 
        }
        
    }

    return (
        <section className='flex flex-wrap justify-center gap-3'>
            {cards.map(card => (
                <div key={card.id} className={`${styles.scene}`}>
                    <div className={`${styles.card} ${card.isFlipped ? styles.flipped : ''}`} onClick={() => handleCardFlip(card)}>
                        <figure className={`${styles.cardFace} ${styles.front}`}>
                            {/* <img src="/images/cardGameImages/card-front.png" className='rounded-lg' /> */}
                        </figure>

                        <div className={`${styles.cardFace} ${styles.back}`}>
                            {card.isImage ? <img src={card.imagePath} alt="" className='rounded' /> : <p className='h-full p-1 text-center flex justify-center items-center'>{card.text}</p>}
                            
                        </div>
                    </div>
                </div>
            ))}
        </section>

    )
}