'use client'
import { useContext, useState, useEffect } from 'react';
import { ProgressDataContext } from '../../context/ProgressDataContext';

import { MatchingCards } from '@/app/components/MatchingCards';
import { HuntCompleteModal } from '../../components/HuntCompleteModal';

export default function CardsPage() {
    const [cards, setCards] = useState([
        {
            id: 1,
            isImage: true,
            imagePath: '/images/cardGameImages/cassidy-arch-card.jpg',
            match: 2,
            isFlipped: false,
            isMatched: false
        },
        {
            id: 2,
            isImage: false,
            text: 'Cassidy Arch',
            match: 1,
            isFlipped: false,
            isMatched: false
        },
        {
            id: 3,
            isImage: true,
            imagePath: '/images/cardGameImages/chimney-rock-card.jpg',
            match: 4,
            isFlipped: false,
            isMatched: false
        },
        {
            id: 4,
            isImage: false,
            text: 'Chimney Rock',
            match: 3,
            isFlipped: false,
            isMatched: false
        },
        {
            id: 5,
            isImage: true,
            imagePath: '/images/cardGameImages/fruita-card.jpg',
            match: 6,
            isFlipped: false,
            isMatched: false
        },
        {
            id: 6,
            isImage: false,
            text: 'Fruita',
            match: 5,
            isFlipped: false,
            isMatched: false
        },
        {
            id: 7,
            isImage: true,
            imagePath: '/images/cardGameImages/golden-throne-card.jpg',
            match: 8,
            isFlipped: false,
            isMatched: false
        },
        {
            id: 8,
            isImage: false,
            text: 'Golden Throne',
            match: 7,
            isFlipped: false,
            isMatched: false
        },
        {
            id: 9,
            isImage: true,
            imagePath: '/images/cardGameImages/hickman-bridge-card.jpg',
            match: 10,
            isFlipped: false,
            isMatched: false
        },
        {
            id: 10,
            isImage: false,
            text: 'Hickman Bridge',
            match: 9,
            isFlipped: false,
            isMatched: false
        },
        {
            id: 11,
            isImage: true,
            imagePath: '/images/cardGameImages/crfs-card.jpg',
            match: 12,
            isFlipped: false,
            isMatched: false
        },
        {
            id: 12,
            isImage: false,
            text: 'Capitol Reef Field Station',
            match: 11,
            isFlipped: false,
            isMatched: false
        },
    ])
    
    return (
        <main className="p-5">
            <MatchingCards 
                cards={cards}
                setCards={setCards}
            />
        </main>
    )
}