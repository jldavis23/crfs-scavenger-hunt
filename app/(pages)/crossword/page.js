'use client'
import { useContext, useState, useEffect } from 'react';
import { ProgressDataContext } from '../../context/ProgressDataContext';

import { Crossword } from '../../components/Crossword.js'
import { HuntCompleteModal } from '../../components/HuntCompleteModal';

export default function CrosswordPage() {
    const { progressData, setProgressData } = useContext(ProgressDataContext)
    const [puzzleCompleted, setPuzzleCompleted] = useState(null)

    const puzzle = {
        crosswordRows: [
            ['', '', '', '', '', '', '', 'T', '', 'D'],
            ['', '', '', '', '', '', '', 'E', '', 'A'],
            ['', '', '', '', '', '', '', 'L', '', 'R'],
            ['N', 'A', 'K', 'E', 'D', 'E', 'Y', 'E', '', 'K'],
            ['', '', '', '', '', '', '', 'S', '', 'S'],
            ['', '', '', '', '', 'P', '', 'C', '', 'K'],
            ['', 'A', 'S', 'T', 'R', 'O', 'N', 'O', 'M', 'Y'],
            ['', '', '', '', '', 'L', '', 'P', '', ''],
            ['', '', '', '', '', 'L', '', 'E', '', ''],
            ['', '', '', '', '', 'U', '', '', '', ''],
            ['', '', '', '', '', 'T', '', '', '', ''],
            ['', '', '', '', '', 'I', '', '', '', ''],
            ['', '', '', '', '', 'O', '', '', '', ''],
            ['', '', '', '', '', 'N', '', '', '', '']
        ],
        wordStarts: [
            ['', '', '', '', '', '', '', 1, '', 2],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            [3, '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', 4, '', '', '', ''],
            ['', 5, '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '']
        ],
        clues: {
            across: [
                "3. Used to view the night sky without equipment",
                "5. The study of celestial objects"
            ],
            down: [
                "1. Instrument used to view the night sky",
                "2. Capitol Reef is designated as an international ___ ___ park",
                "4. Light ___ is excessive brightness that obscures the night sky"
            ]
        }
    }

    useEffect(() => {
        if (progressData) {
            setPuzzleCompleted(progressData.tag1.completed)
        }
    }, [progressData])

    useEffect(() => {
        setProgressData(prevState => ({
            ...prevState,
            tag1: { ...prevState.tag1, completed: puzzleCompleted }
        }))
    }, [puzzleCompleted])

    // If all the tags are complete, show the Hunt Completed Modal
    useEffect(() => {
        if (puzzleCompleted) {
            if (Object.keys(progressData).every(tag => progressData[tag].completed === true)) {
                document.getElementById('completed_modal').showModal()
            }
        }
    }, [progressData])

    return (
        <main className="p-5">
            <h1>Information</h1>

            <Crossword
                puzzle={puzzle}
                puzzleCompleted={puzzleCompleted}
                setPuzzleCompleted={setPuzzleCompleted}
            />

            <HuntCompleteModal/>
        </main>
    )
}