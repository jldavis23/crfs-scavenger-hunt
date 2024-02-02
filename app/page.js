'use client'
import { useState, useContext, useEffect } from "react"
import { ProgressDataContext } from "./context/ProgressDataContext"

// import { Instructions } from "./components/Instructions"

export default function Home() {
  const { progressData, setProgressData } = useContext(ProgressDataContext)
  let firstVisit = progressData.firstVisit

  return (
    <main>
      {/* {firstVisit ? <Instructions setProgressData={setProgressData} /> : ''} */}
    </main>
  )
} 