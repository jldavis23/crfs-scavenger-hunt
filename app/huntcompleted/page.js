'use client'
import { useContext, useEffect } from 'react';
import { ProgressDataContext } from '../context/ProgressDataContext';
import confetti from 'canvas-confetti'

export default function CompletedPage() {
    const { progressData, setProgressData } = useContext(ProgressDataContext)
    let huntCompleted = Object.keys(progressData).every(tag => progressData[tag].completed)

    useEffect(() => {
        confetti()
    }, [])
    
    return (
        <main className='p-5'>
            {huntCompleted ? (
                <div className='text-center mx-4'>
                    <figure className=''><img src="/images/raccoon.png" alt="raccoon with party hat"/></figure>
                    <h1 className='font-bold text-4xl my-5'>Wahoo!</h1>
                    <p>You have completed the scavenger hunt. Show this screen to the site manager to claim your prize.</p>
                    <a href="/" className='btn btn-secondary rounded-full w-full mt-6'>DONE</a>
                </div>
            ) : (
                <div></div>
            )}
        </main>
    )
}