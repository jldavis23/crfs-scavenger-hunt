'use client'
import { useState, useEffect } from 'react';
import styles from './MatchingCards.module.css';
import confetti from 'canvas-confetti'

export const MatchingCards = ({ cards, matchingCompleted, setMatchingCompleted }) => {
    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <section className='grid grid-rows-4 grid-cols-3 gap-3'>
            {cards.map(card => (
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
            ))}
        </section>
    )
}