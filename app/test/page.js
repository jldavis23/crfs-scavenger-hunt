'use client'
import { useContext, useState, useEffect, useRef } from 'react'
import { ProgressDataContext } from '../context/ProgressDataContext'
import { gsap } from "gsap"

export default function TestPage() {
    const [progressPercentage, setProgressPercentage] = useState(0)
    const [count, setCount] = useState(0)

    

    const changeProgress = () => {
        setCount(prevState => prevState + 1)
        setProgressPercentage((count / 10) * 100)
    }

   

    return (
        <div className='bg-primary h-screen'>
            <div className="relative w-full h-7 bg-primary border border-white rounded-full overflow-hidden">
                <div
                    className="absolute top-0 left-0 h-full bg-info transition-all"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>

            <button onClick={changeProgress}>clikc me</button>
        </div>
    );
}