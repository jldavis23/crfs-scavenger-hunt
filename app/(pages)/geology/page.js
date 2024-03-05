'use client'
import { useContext, useState, useEffect } from 'react';
import { ProgressDataContext } from '../../context/ProgressDataContext';

import { MatchingCards } from '@/app/components/MatchingCards';
import { HuntCompleteModal } from '../../components/HuntCompleteModal';

export default function GeologyPage() {
    const { progressData, setProgressData } = useContext(ProgressDataContext)
    const [matchingCompleted, setMatchingCompleted] = useState(null)

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

    // Update the matchingCompleted variable with the value of the corresponding tag in the localstorage
    useEffect(() => {
        if (progressData) {
            setMatchingCompleted(progressData.tag3.completed)
        }
    }, [progressData])

    // Update the user's progress when matchingCompleted changes
    useEffect(() => {
        setProgressData(prevState => ({
            ...prevState,
            tag3: { ...prevState.tag3, completed: matchingCompleted }
        }))
    }, [matchingCompleted])

    // If all the tags are complete, show the Hunt Completed Modal
    useEffect(() => {
        if (matchingCompleted) {
            if (Object.keys(progressData).every(tag => progressData[tag].completed === true)) {
                document.getElementById('completed_modal').showModal()
            }
        }
    }, [progressData])
    
    return (
        <main className="p-5 flex flex-col gap-4">
            <h1>Info About Capitol Reef</h1>

            <p>Capitol Reef National Park is a captivating expanse of rugged beauty nestled in south-central Utah, USA. Established in 1971, the park spans over 240,000 acres, showcasing a mesmerizing blend of colorful canyons, towering cliffs, and unique rock formations. Its name, derived from the white Navajo Sandstone domes that resemble the U.S. Capitol building, reflects the park's distinctive geological features.</p>

            <p>The Waterpocket Fold, a nearly 100-mile long warp in the Earth's crust, is the park's defining geological wonder, creating a diverse landscape of canyons, ridges, and mesas. Visitors to Capitol Reef can explore a myriad of hiking trails that wind through the surreal terrain, offering breathtaking views of the surrounding red rock scenery.</p>

            <p>Fruit orchards, remnants of the park's historic Mormon pioneer past, add a touch of cultural history to the landscape. The Fruita Historic District showcases orchards with cherry, apricot, peach, and apple trees, providing a scenic contrast to the rugged desert backdrop. Visitors can even pick and enjoy fresh fruit during the harvest season.</p>

            <MatchingCards 
                cards={cards}
                setCards={setCards}
                matchingCompleted={matchingCompleted}
                setMatchingCompleted={setMatchingCompleted}
            />

            <HuntCompleteModal/>
        </main>
    )
}