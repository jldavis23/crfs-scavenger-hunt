'use client'
import { useContext, useEffect, useState } from 'react';
import { ProgressDataContext } from '../../context/ProgressDataContext';
import confetti from 'canvas-confetti'

export default function CompletedPage() {
    const { progressData, setProgressData } = useContext(ProgressDataContext)
    const [huntCompleted, setHuntCompleted] = useState(null)

    useEffect(() => {
        if (progressData) {
            setHuntCompleted(Object.keys(progressData).every(tag => progressData[tag].completed === true))
        }
    }, [progressData])

    useEffect(() => {
        if (huntCompleted === true) {
            confetti()
            console.log(huntCompleted)
        }
    }, [huntCompleted])

    return (
        <main className='p-5 max-w-[700px] m-auto'>
            {huntCompleted === true ? (
                <div className='text-center mx-4'>
                    <figure className='w-1/2 m-auto'><img src="/images/SP_Completed_Bighorn.png" alt="" /></figure>
                    <h1 className='font-bold text-4xl my-5'>Wahoo!</h1>
                    <p>You have completed the scavenger hunt. Show this screen to the site manager to claim your prize.</p>
                    <a href="/" className='btn btn-secondary rounded-full w-full mt-6'>DONE</a>
                </div>
            ) : (
                huntCompleted === false ? (
                    <div className='text-center'>
                        <p className='font-bold text-xl mt-6'>You haven't completed the scavenger hunt yet</p>
                        <a href="/" className='btn btn-secondary rounded-full w-full mt-6'>RETURN TO HOME</a>
                    </div>
                ) : (
                    <div className='text-center'>
                        <span className="loading loading-spinner loading-lg text-primary"></span>
                    </div>
                )

            )}

        </main>
    )
}