'use client'
import { createContext, useState, useEffect } from "react"

export const ProgressDataContext = createContext()

export const ProgressDataProvider = ({ children }) => {
    const initialProgressData = {
        tag1: { scanned: false, completed: false, description: 'Look for the tag where the pink flowers are located.', hint: '' },
        tag2: { scanned: false, completed: false, description: 'Look for the tag where the pink flowers are located.', hint: '' },
        tag3: { scanned: false, completed: false, description: 'Look for the tag where the pink flowers are located.', hint: '' },
        tag4: { scanned: false, completed: false, description: 'Look for the tag where the pink flowers are located.', hint: '' }
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