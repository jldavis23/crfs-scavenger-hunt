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
            ['', '', '', '', '', 'D', '', '', '', '', '', '', '', ''],
            ['', '', '', '', 'N', 'A', 'K', 'E', 'D', 'E', 'Y', 'E', '', ''],
            ['', '', '', '', '', 'R', '', '', '', '', '', '', '', 'A'],
            ['', '', '', '', '', 'K', '', '', '', '', '', '', '', 'S'],
            ['', '', '', '', '', 'S', '', '', '', '', '', '', '', 'T'],
            ['', '', '', '', '', 'K', '', 'T', '', '', '', '', '', 'R'],
            ['', '', '', '', '', 'Y', '', 'E', '', '', '', '', '', 'O'],
            ['L', 'I', 'G', 'H', 'T', 'P', 'O', 'L', 'L', 'U', 'T', 'I', 'O', 'N'],
            ['', '', '', '', '', 'A', '', 'E', '', '', '', '', '', 'O'],
            ['', '', '', '', '', 'R', '', 'S', '', '', '', '', '', 'M'],
            ['', '', '', '', '', 'K', '', 'C', '', '', '', '', '', 'Y'],
            ['', '', '', '', '', '', '', 'O', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', 'P', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', 'E', '', '', '', '', '', '']
        ],
        wordStarts: [
            ['', '', '', '', '', 1, '', '', '', '', '', '', '', ''],
            ['', '', '', '', 2, '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '', '', '', '', 3],
            ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', 4, '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            [5, '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '', '', '', '', '']
        ],
        clues: {
            across: [
                "2. Used to view the night sky without equipment",
                "5. Excessive brightness that obscures the night sky"
            ],
            down: [
                "1. What was Capitol Reef designated as?",
                "3. Relating to the study of celestial objects",
                "4. Instrument used to view the night sky"
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