'use client'
import { useState, useContext, useEffect } from "react"
import { ProgressDataContext } from "./context/ProgressDataContext"

export default function Home() {
  const { progressData, setProgressData } = useContext(ProgressDataContext)
  const [completedTags, setCompletedTags] = useState(null)
  const [uncompletedTags, setUncompletedTags] = useState(null)

  useEffect(() => {
    if (progressData) {
      setCompletedTags(Object.keys(progressData).filter(tag => progressData[tag].completed))
      setUncompletedTags(Object.keys(progressData).filter(tag => !progressData[tag].completed))
    }
  }, [progressData])


  return (
    <main className="p-5">

      {/* UNCOMPLETED TAGS */}
      <h2 className="text-2xl font-bold">To Find</h2>

      <div className="mt-3 flex flex-col gap-4">
        {uncompletedTags ? (
          uncompletedTags.length > 0 ? (
            uncompletedTags.map((tag, i) => (
              // <div key={i} className=" bg-accent p-3 rounded-lg font-medium transition-all">
              //   <div className="flex items-center gap-3">
              //     <figure className="w-1/5"><img src="/images/placeholder-icon.png" alt="" /></figure>
              //     <p>{progressData[tag].description}</p>
              //     <button className="btn btn-secondary btn-sm rounded-full">Hint</button>
              //   </div>

              //   <p className="font-bold mt-4 text-sm text-[#4b4f39] transition-all">{progressData[tag].hint}</p>
              // </div>

              //

              <div key={i} className="collapse bg-accent rounded-lg font-medium">
                <input type="checkbox" />
                <div className="collapse-title flex items-center gap-3 pe-4 justify-between"> 
                  <div className="flex items-center gap-3">
                    <img className="w-12" src={progressData[tag].icon} alt="" />
                    <p>{progressData[tag].description}</p>
                  </div>
                  
                  <button className="btn btn-secondary btn-sm rounded-full">HINT</button>
                </div>
                <div className="collapse-content">
                  <p className="font-bold mt-4 text-[#4b4f39]">{progressData[tag].hint}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-neutral text-center p-3 rounded-lg font-medium">
              <p className="font-bold mb-2">You have found and completed all the tags!</p>
              <a href="/huntcompleted" className="link">See certificate →</a>
            </div>
          )
        ) : (
          <div className='text-center'>
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        )}


      </div>

      {/* COMPLETED TAGS */}
      <h2 className="text-2xl font-bold my-5">Completed</h2>

      <div className="mt-3 flex flex-col gap-4">
        {completedTags ? (
          completedTags.length > 0 ? (
            completedTags.map((tag, i) => (
              <div key={i} className="flex items-center justify-between gap-3 bg-[#7d8376] p-3 rounded-lg font-medium">
                <div className="flex items-center gap-3">
                  <img className="w-12" src={progressData[tag].icon} alt="" />
                  <p>{progressData[tag].description}</p>
                </div>
                
                <p className="text-3xl">✓</p>
              </div>
            ))
          ) : (
            <div className="bg-neutral text-center p-3 rounded-lg font-medium">
              <p className="font-bold">0 Completed</p>
              <p>Search the field station for the white tags to get started</p>
            </div>
          )
        ) : (
          <div className='text-center'>
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        )}

      </div>
    </main>
  )
} 