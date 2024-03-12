'use client'
import { createContext, useState, useEffect } from "react"

export const ProgressDataContext = createContext()

export const ProgressDataProvider = ({ children }) => {
    const initialProgressData = {
        tag1: { 
            name: 'sustainability', 
            completed: false, 
            description: 'Location 1', 
            hint: 'Did you check the right side of the CRFS sign?', 
            icon: '/images/icons/SP_sustainability_icon.svg' 
        },
        tag2: { 
            name:'history', 
            completed: false, 
            description: 'Location 2', 
            hint: 'Did you check the right side of the CRFS sign?', 
            icon: '/images/icons/SP_history_icon.svg'
        },
        tag3: { 
            name: 'geology', 
            completed: false, 
            description: 'Location 3', 
            hint: 'Did you check the right side of the CRFS sign?', 
            icon: '/images/icons/SP_geology_icon.svg' 
        },
        tag4: { 
            name: 'astronomy', 
            completed: false, 
            description: 'Location 4', 
            hint: 'Did you check the right side of the CRFS sign?', 
            icon: '/images/icons/SP_astronomy_icon.svg' }
    }

    const [progressData, setProgressData] = useState('')

    useEffect(() => {
        const data = localStorage.getItem('progressData')
        if (!data) {
            //if the localstorage item progressData does not exist, add it
            localStorage.setItem('progressData', JSON.stringify(initialProgressData))
            setProgressData(initialProgressData)
        } else {
            //if the localstorage item progressData does exist, set the state variable to that value
            setProgressData(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
        // when the state variable changes, this useEffect hook is fired. Keeps the localstorage in sync with progressData state variable
        if (progressData) {
          localStorage.setItem('progressData', JSON.stringify(progressData))
        }
      }, [progressData])

    return (
        <ProgressDataContext.Provider value={{ progressData, setProgressData }}>
            {children}
        </ProgressDataContext.Provider>
    )
}