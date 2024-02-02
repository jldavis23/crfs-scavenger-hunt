'use client'
import { useContext } from "react"
import { ProgressDataContext } from "./context/ProgressDataContext"

export default function Home() {
  const { progressData, setProgressData } = useContext(ProgressDataContext)
  const completedTags = Object.keys(progressData).filter(tag => progressData[tag].completed)
  const uncompletedTags = Object.keys(progressData).filter(tag => !progressData[tag].completed)


  return (
    <main className="p-5">

      {/* UNCOMPLETED TAGS */}
      <h2 className="text-2xl font-bold">To Find</h2>

      <div className="mt-3 flex flex-col gap-4">
        {uncompletedTags.length ? (
          uncompletedTags.map((tag, i) => (
            <div key={i} className="flex items-center gap-3 bg-accent p-3 rounded-lg font-medium">
              <figure className="w-1/5"><img src="/images/placeholder-icon.png" alt=""/></figure>
              <p>{progressData[tag].description}</p>
              <button className="btn btn-secondary btn-sm rounded-full">Hint</button>
            </div>
          ))
        ) : (
          <div className="bg-neutral text-center p-3 rounded-lg font-medium">
            <p className="font-bold mb-2">You have found and completed all the tags!</p>
            <a href="/huntcompleted" className="link">See certificate →</a>
          </div>
        )}
        
      </div>

      {/* COMPLETED TAGS */}
      <h2 className="text-2xl font-bold my-5">Completed</h2>

      <div className="mt-3 flex flex-col gap-4">
        {completedTags.length ? (
          completedTags.map((tag, i) => (
            <div key={i} className="flex items-center gap-3 bg-[#7d8376] p-3 rounded-lg font-medium">
            <figure className="w-1/5"><img src="/images/placeholder-icon.png" alt=""/></figure>
            <p>{progressData[tag].description}</p>
            <p className="text-3xl">✓</p>
          </div>
          ))
        ) : (
          <div className="bg-neutral text-center p-3 rounded-lg font-medium">
            <p className="font-bold">0 Completed</p>
            <p>Search the field station for the white tags to get started</p>
          </div>
        )}
      </div>
    </main>
  )
} 