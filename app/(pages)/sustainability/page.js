'use client'
import { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ProgressDataContext } from '../../context/ProgressDataContext'

import { Quiz } from '../../components/Quiz.js'
import { HuntCompleteModal } from '../../components/HuntCompleteModal'

export default function SustainabilityPage() {
    const { progressData, setProgressData } = useContext(ProgressDataContext)
    const [quizCompleted, setQuizCompleted] = useState(null)

    const router = useRouter()

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

    // Set quizCompleted to the current value of tag2.completed
    useEffect(() => {
        if (progressData) {
            setQuizCompleted(progressData.tag2.completed)
        }
    }, [progressData])

    // When quizCompleted changes to true, set progress data tag 2 to true
    useEffect(() => {
        setProgressData(prevState => ({
            ...prevState,
            tag2: { ...prevState.tag2, completed: quizCompleted }
        }))
    }, [quizCompleted])

    // If all the tags are complete, show the Hunt Completed Modal
    useEffect(() => {
        if (quizCompleted) {
            if (Object.keys(progressData).every(tag => progressData[tag].completed === true)) {
                document.getElementById('completed_modal').showModal()
            }
        }
    }, [progressData])

    return (
        <main className='p-5'>
            <p>information about the field station</p>

            <Quiz
                quiz={quiz}
                quizCompleted={quizCompleted}
                setQuizCompleted={setQuizCompleted}
            />

            <HuntCompleteModal/>
        </main>
    )
}