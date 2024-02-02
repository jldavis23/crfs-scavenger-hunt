'use client'
import { useContext, useState, useEffect } from 'react';
import { ProgressDataContext } from '../context/ProgressDataContext';

import { Crossword } from '../components/Crossword.js'

export default function CrosswordPage() {
    const { progressData, setProgressData } = useContext(ProgressDataContext)
    const [puzzleCompleted, setPuzzleCompleted] = useState(null)

    const puzzle = {
        crosswordRows: [
            ['', 'S', 'P', 'A', 'R', 'R', 'O', 'W'],
            ['H', '', '', 'B', '', '', '', ''],
            ['O', '', '', 'U', '', '', '', ''],
            ['R', '', '', 'N', '', '', '', ''],
            ['S', '', '', 'D', '', '', '', ''],
            ['E', 'M', 'P', 'A', 'T', 'H', 'Y', ''],
            ['', '', '', 'N', '', '', '', ''],
            ['', 'C', 'A', 'T', '', '', '', '']
        ],
        wordStarts: [
            ['', 5, '', 3, '', '', '', ''],
            [1, '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            [4, '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', 2, '', '', '', '', '', '']
        ],
        clues: {
            across: [
                "2. A feline furry animal",
                "4. The ability to understand and share the feelings of another",
                "5. A small brown bird known for chirping"
            ],
            down: [
                "1. A large, four-legged animal that is often used for transportation",
                "3. Existing or available in large quantities"
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

    return (
        <main className="p-5">
            <h1>Information</h1>

            <Crossword
                puzzle={puzzle}
                puzzleCompleted={puzzleCompleted}
                setPuzzleCompleted={setPuzzleCompleted}
            ></Crossword>
        </main>
    )
}