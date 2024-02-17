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
            isImage: false,
            text: 'Cassidy Arch',
            match: 1
        },
        {
            id: 3,
            isImage: true,
            imagePath: '/images/cardGameImages/chimney-rock-card.jpg',
            match: 4
        },
        {
            id: 4,
            isImage: false,
            text: 'Chimney Rock',
            match: 3
        },
        {
            id: 5,
            isImage: true,
            imagePath: '/images/cardGameImages/fruita-card.jpg',
            match: 6
        },
        {
            id: 6,
            isImage: false,
            text: 'Fruita',
            match: 5
        },
        {
            id: 7,
            isImage: true,
            imagePath: '/images/cardGameImages/golden-throne-card.jpg',
            match: 8
        },
        {
            id: 8,
            isImage: false,
            text: 'Golden Throne',
            match: 7
        },
        {
            id: 9,
            isImage: true,
            imagePath: '/images/cardGameImages/hickman-bridge-card.jpg',
            match: 10
        },
        {
            id: 10,
            isImage: false,
            text: 'Hickman Bridge',
            match: 9
        },
        {
            id: 11,
            isImage: true,
            imagePath: '/images/cardGameImages/crfs-card.jpg',
            match: 12
        },
        {
            id: 12,
            isImage: false,
            text: 'Capitol Reef Field Station',
            match: 11
        },
    ]
    
    return (
        <main className="p-5">
            <MatchingCards 
                cards={cards}
            />
        </main>
    )
}