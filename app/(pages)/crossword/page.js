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
            ['P', '', '', '', '', '', '', '', '', '', '', ''],
            ['O', '', '', '', '', 'D', 'A', 'R', 'K', 'S', 'K', 'Y'],
            ['L', '', '', 'N', '', '', 'S', '', '', '', '', ''],
            ['L', '', '', 'A', '', '', 'T', '', '', '', '', ''],
            ['U', '', '', 'K', '', '', 'R', '', '', '', '', ''],
            ['T', 'E', 'L', 'E', 'S', 'C', 'O', 'P', 'E', '', '', ''],
            ['I', '', '', 'D', '', '', 'N', '', '', '', '', ''],
            ['O', '', '', 'E', '', '', 'O', '', '', '', '', ''],
            ['N', '', '', 'Y', '', '', 'M', '', '', '', '', ''],
            ['', '', '', 'E', '', '', 'Y', '', '', '', '', '']
        ],
        wordStarts: [
            [1, '', '', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', 2, 3, '', '', '', '', ''],
            ['', '', '', 4, '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '', '', ''],
            [5, '', '', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '', '', '']
        ],
        clues: {
            across: [
                "2. dark sky",
                "5. telescope"
            ],
            down: [
                "1. pollution",
                "3. astronomy",
                "4. naked eye"
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