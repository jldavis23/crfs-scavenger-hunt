'use client'
import { useState } from 'react'

export const Instructions = ({ setProgressData }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const instructions = [
        'Connect to the wifi: Wilderness, Password: CRFS', 
        'Search the station for signs and scan the located chip', 
        'Learn about Captiol Reef, do the activity, and earn a special prize at the end'
    ]

    const handleNext = () => {
        setCurrentIndex(prevIndex => {
            return prevIndex + 1
        })
    }

    const handleBack = () => {
        setCurrentIndex(prevIndex => {
            return prevIndex - 1
        })
    }

    const setFirstVisit = () => {
        setProgressData(prevState => ({
            ...prevState,
            firstVisit: false
        }))
    }

    return (
        <div className='bg-secondary h-screen w-screen fixed top-0 left-0 p-5 flex flex-col justify-between z-50'>
            <div className='flex gap-5 justify-between'>
                <figure><img src='/images/crfs-logo.png' alt='CRFS Logo' className="w-20" /></figure>
                <figure><img src='/images/uvu-dgm-logo.png' alt="UVU DGM Logo" className="w-32" /></figure>
            </div>

            <div className="text-white flex flex-col gap-4">
                <h1 className="text-4xl font-semibold font-cabinSketch">Welcome to the Captiol Reef Field Station Scavenger Hunt!</h1>

                <div className="flex gap-3">
                    <p className="text-4xl font-semibold text-accent flex items-center">{currentIndex + 1}</p>
                    <p className="text-lg">{instructions[currentIndex]}</p>
                </div>

                {currentIndex === instructions.length - 1 ? <button className="btn btn-primary border border-white opacity-80 hover:opacity-100" onClick={setFirstVisit}>START</button> : ''}

                <div className="flex gap-4">
                    <button className={`btn btn-circle btn-sm ${currentIndex === 0 ? 'btn-disabled' : ''}`} onClick={handleBack}>&lt;</button>
                    <button className={`btn btn-circle btn-sm ${currentIndex === instructions.length - 1 ? 'btn-disabled' : ''}`} onClick={handleNext}>&gt;</button>
                </div>
                
                <p className="text-center">©UVU DWDD 490R|2024</p>
            </div>

        </div>
    )
}
