'use client'
import { useState } from 'react';
import confetti from 'canvas-confetti'

export const Crossword = ({ puzzle, puzzleCompleted, setPuzzleCompleted }) => {
    // VARIABLES
    const [userAnswers, setUserAnswers] = useState(
        puzzle.crosswordRows.map(row => row.map(cell => (cell !== '' ? '' : null)))
    );
    const solutions = puzzle.crosswordRows.map(row => row.map(cell => (cell !== '' ? cell : null)));

    // FUNCTIONS
    const handleInputChange = (rowIndex, cellIndex, e) => {
        let updatedAnswers = [...userAnswers]
        updatedAnswers[rowIndex][cellIndex] = e.target.value.toUpperCase()

        setUserAnswers(updatedAnswers)

        if (JSON.stringify(updatedAnswers) == JSON.stringify(solutions)) {
            setPuzzleCompleted(true)
            confetti()
        }
    }

    return (
        <section>
            {puzzleCompleted === true ? (
                <h2 className="font-semibold text-2xl m-8 text-center text-success">Puzzle Complete ✓</h2>
            ) : (
                puzzleCompleted === false ? (
                    <h2 className="font-semibold text-2xl m-8 text-center">Complete the Crossword Puzzle</h2>,

                    <div className="flex flex-col items-center gap-10">
                        <div>
                            {puzzle.crosswordRows.map((row, i) => (
                                <div key={i} className="flex">
                                    {row.map((cell, j) =>
                                        cell !== '' ? (
                                            <div className="relative" key={j}>
                                                <input
                                                    type="text"
                                                    className={`w-8 h-8 flex justify-center items-center border border-black text-center rounded-none ${userAnswers[i][j] === solutions[i][j] ? 'bg-success' : ""}`}
                                                    maxLength={1}
                                                    onChange={e => handleInputChange(i, j, e)}
                                                    value={puzzleCompleted ? solutions[i][j] : userAnswers[i][j]}

                                                />
                                                {puzzle.wordStarts[i][j] ? (
                                                    <span className="absolute top-1 left-1 text-xs leading-none">{puzzle.wordStarts[i][j]}</span>
                                                ) : ""}
                                            </div>
                                        ) : (
                                            <div
                                                className="w-8 h-8 bg-black"
                                                key={j}>
                                            </div>
                                        )
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="grid gap-5">
                            <div>
                                <h2 className="font-bold">Across</h2>
                                {puzzle.clues.across.map((clue, i) => (
                                    <p key={i}>{clue}</p>
                                ))}
                            </div>
                            <div>
                                <h2 className="font-bold">Down</h2>
                                {puzzle.clues.down.map((clue, i) => (
                                    <p key={i}>{clue}</p>
                                ))}
                            </div>
                        </div>

                    </div>
                ) : (
                    <div className='text-center'>
                        <span className="loading loading-spinner loading-lg text-primary"></span>
                    </div>
                )
            )}


        </section>
    )
}