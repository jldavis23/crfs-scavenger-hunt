'use client'
import { useState, useEffect } from 'react'

export default function InstructionsPage({ setProgressData }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const instructions = [
        {
            text: 'Search inside the field station for small white tags/chips/discs attached to the walls.',
            imagePath: '/images/NFC-chip.jpg',
            alt: 'An example of a tag/chip/disc'
        },
        {
            text: 'When you have located a tag, place your phone over it to bring up a new webpage.',
            imagePath: '/images/scan-animation.gif',
            alt: 'Animation demonstrating how to scan the chip'
        },
        {
            text: 'Read the information on the page and complete the activity.',
            imagePath: '',
            alt: ''
        },
        {
            text: 'Look for more tags! Your progress will be tracked in a progress bar at the top of the screen.',
            imagePath: '',
            alt: ''
        },
        {
            text: 'Once you have located and completed the activity for each tag, show your completed screen to the site manager to earn a small prize!',
            imagePath: '',
            alt: ''
        },
        {
            text: 'Important! Make sure to NOT use a private/incognito tab and to NOT clear your browsing history while playing the scavenger hunt or else your progress will not be saved correctly!',
            imagePath: '',
            alt: ''
        }
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
        <div id="instructions" className={`bg-[#484d56] p-5 flex flex-col gap-10`}>
            <div className='flex gap-5 justify-between'>
                <figure><img src='/images/crfs-logo.png' alt='CRFS Logo' className="w-20" /></figure>
                <figure><img src='/images/uvu-dgm-logo.png' alt="UVU DGM Logo" className="w-32" /></figure>
            </div>

            <div className="text-white flex flex-col gap-4">
                <h1 className="text-4xl font-semibold font-cabinSketch">Welcome to the Captiol Reef Field Station Scavenger Hunt!</h1>

                <div className="flex gap-3">
                    <p className="text-4xl font-semibold text-accent flex items-center">{currentIndex + 1}</p>
                    <p className="text-lg">{instructions[currentIndex].text}</p>
                </div>

                <img src={instructions[currentIndex].imagePath} alt={instructions[currentIndex].alt}/>

                {currentIndex === instructions.length - 1 ? <button className="btn btn-primary border border-white opacity-80 hover:opacity-100" onClick={setFirstVisit}>START</button> : ''}

                <div className="flex gap-4">
                    <a href="#instructions" className={`btn btn-circle btn-sm ${currentIndex === 0 ? 'btn-disabled' : ''}`} onClick={handleBack}>&lt;</a>
                    <a href="#instructions" className={`btn btn-circle btn-sm ${currentIndex === instructions.length - 1 ? 'btn-disabled' : ''}`} onClick={handleNext}>&gt;</a>
                </div>

                
                
                <p className="text-center">© UVU DWDD 490R | 2024</p>
            </div>

        </div>
    )
}
