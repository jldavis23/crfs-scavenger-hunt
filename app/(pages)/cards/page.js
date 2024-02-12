'use client'
import { useContext, useState, useEffect } from 'react';
import { ProgressDataContext } from '../../context/ProgressDataContext';

import { MatchingCards } from '@/app/components/MatchingCards';
import { HuntCompleteModal } from '../../components/HuntCompleteModal';

export default function CardsPage() {

    let cards = [
        {
            id: 1,
            isImage: true,
            imagePath: '/images/cardGameImages/cassidy-arch-card.jpg',
            match: 2
        },
        {
            id: 2,
            isImage: true,
            imagePath: '/images/cardGameImages/cassidy-arch-card.jpg',
            match: 1
        },
        {
            id: 3,
            isImage: true,
            imagePath: '/images/cardGameImages/cassidy-arch-card.jpg',
            match: 4
        },
        {
            id: 4,
            isImage: true,
            imagePath: '/images/cardGameImages/cassidy-arch-card.jpg',
            match: 3
        },
        {
            id: 5,
            isImage: true,
            imagePath: '/images/cardGameImages/cassidy-arch-card.jpg',
            match: 6
        },
        {
            id: 6,
            isImage: true,
            imagePath: '/images/cardGameImages/cassidy-arch-card.jpg',
            match: 5
        },
        {
            id: 7,
            isImage: true,
            imagePath: '/images/cardGameImages/cassidy-arch-card.jpg',
            match: 8
        },
        {
            id: 8,
            isImage: true,
            imagePath: '/images/cardGameImages/cassidy-arch-card.jpg',
            match: 7
        },
        {
            id: 9,
            isImage: true,
            imagePath: '/images/cardGameImages/cassidy-arch-card.jpg',
            match: 10
        },
        {
            id: 10,
            isImage: true,
            imagePath: '/images/cardGameImages/cassidy-arch-card.jpg',
            match: 9
        },
        {
            id: 11,
            isImage: true,
            imagePath: '/images/cardGameImages/cassidy-arch-card.jpg',
            match: 12
        },
        {
            id: 12,
            isImage: true,
            imagePath: '/images/cardGameImages/cassidy-arch-card.jpg',
            match: 11
        },
    ]
    
    return (
        <main>
            <MatchingCards 
                cards={cards}
            />
        </main>
    )
}