'use client'
import { useContext, useState, useEffect } from 'react'
import { ProgressDataContext } from '../context/ProgressDataContext'

import { Quiz } from '../components/Quiz.js'

export default function QuizPage() {
    const { progressData, setProgressData } = useContext(ProgressDataContext)
    const [quizCompleted, setQuizCompleted] = useState(false)

    const quiz = [
        {
            question: 'What is the first color of the rainbow?',
            choices: [
                { label: 'red', isCorrect: true },
                { label: 'blue', isCorrect: false },
                { label: 'green', isCorrect: false },
                { label: 'orange', isCorrect: false }
            ]
        },
        {
            question: 'What is 2+2?',
            choices: [
                { label: '4', isCorrect: true },
                { label: '6', isCorrect: false },
                { label: '3', isCorrect: false },
                { label: '2', isCorrect: false }
            ]
        },
        {
            question: 'What state is the CRFS in?',
            choices: [
                { label: 'Utah', isCorrect: true },
                { label: 'Nevada', isCorrect: false },
                { label: 'Idaho', isCorrect: false },
                { label: 'Arizona', isCorrect: false }
            ]
        }
    ]

    useEffect(() => {
        if (progressData) {
            setQuizCompleted(progressData.tag2.completed)
        }
    }, [progressData])

    useEffect(() => {
        setProgressData(prevState => ({
            ...prevState,
            tag2: { ...prevState.tag2, completed: quizCompleted }
        }))
    }, [quizCompleted])

    return (
        <main className='p-5'>
            <p>information about the field station</p>

            <Quiz
                quiz={quiz}
                quizCompleted={quizCompleted}
                setQuizCompleted={setQuizCompleted}
            ></Quiz>
        </main>
    )
}