'use client'
import { useEffect, useState } from 'react'

export default function Example() {
  const [taskComplete, setTaskComplete] = useState('')

  const progressData = {
    tag1: {
      scanned: false,
      completed: false
    },
    tag2: {
      scanned: false,
      completed: false
    }
  } 

  useEffect(() => {
    const data = localStorage.getItem('taskComplete')
    if (data === null) {
      //if the localstorage item taskComplete does not exist, add it
      localStorage.setItem('taskComplete', 'false')
      setTaskComplete(false)
    } if (data) {
      //if the localstorage item taskComplete does exist, set the stat variable taskComplete to that value
      setTaskComplete(JSON.parse(data))
    }
  })

  useEffect(() => {
    //when the state variable taskComplete changes, this useEffect hook is fired. It checks if the state variable taskComplete is true. If it is, then it sets the localStorage item taskComplete to true
    if (taskComplete) {
      localStorage.setItem('taskComplete', 'true')
    }
  }, [taskComplete])

  return (
    <main className="p-6">
      <h1 className="text-3xl mb-6">Local Storage Test</h1>

      {taskComplete === null || taskComplete === '' ? (
        <p>LOADING...</p>
      ) : (
        taskComplete ? (
          <p>The task is complete</p>
        ) : (
          <button className="btn my-3" onClick={() => setTaskComplete(!taskComplete)}>Click to complete task</button>
        )
      )}

      {/* {taskComplete ? (
        <p>The task is complete</p>
      ) : (
        <button className="btn my-3" onClick={() => setTaskComplete(!taskComplete)}>Click to complete task</button>
      )} */}
    </main>
  )
}
