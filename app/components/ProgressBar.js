'use client'
import { useContext, useRef, useEffect, useState } from 'react'
import { ProgressDataContext } from '../context/ProgressDataContext'
import { gsap } from "gsap"

export const ProgressBar = () => {
  //VARIABLES
  const { progressData } = useContext(ProgressDataContext)
  const completedTags = Object.keys(progressData).filter(tag => progressData[tag].completed)
  const bar = useRef(null)

  //HOOKS
  useEffect(() => {
    const progressBar = bar.current
    progressBar.value = 0;

    gsap.to(progressBar, {
      value: completedTags.length,
      duration: 0.5,
    });
  }, [completedTags])





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

  const handleStart = () => {
    document.getElementById('modal1').close()
    setCurrentIndex(0)
  }

  return (
    <section>
      <div className="flex gap-3 p-4 bg-primary text-white">
        <div className='flex gap-2'>
          <button className='btn btn-circle btn-sm'>H</button>
          <button className='btn btn-circle btn-sm' onClick={() => document.getElementById('instructions_modal').showModal()}>i</button>
        </div>
        <div className='w-full'>
          <progress ref={bar} className="
            w-full 
            h-7 
            border
            border-white
            rounded-full
            bg-transparent
            [&::-webkit-progress-bar]:rounded-full 
            [&::-webkit-progress-value]:rounded-l-full 
            [&::-webkit-progress-bar]:bg-transparent  
            [&::-webkit-progress-value]:bg-info
            [&::-moz-progress-bar]:bg-info
            "
            value={completedTags.length} max="6"></progress>

          <p className="text-sm mr-3 text-right"><span className="font-bold">{completedTags.length}</span> out of <span className="font-bold">6</span> complete</p>
        </div>
      </div>

      {/* Instructions Modal */}
      <dialog id="instructions_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-3xl mb-4 font-cabinSketch">Welcome to the Capitol Reef Field Station Scavenger Hunt!</h3>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <p className="text-4xl font-semibold text-primary flex items-center">1</p>
              <p>Search around the field station for small white tags attached to the walls.</p>
            </div>
            <div className="flex gap-3">
              <p className="text-4xl font-semibold text-primary flex items-center">2</p>
              <p>When you’ve located a tag, place your phone over it to bring up a new webpage.</p>
            </div>
            <div className="flex gap-3">
              <p className="text-4xl font-semibold text-primary flex items-center">3</p>
              <p>Read the information on the page and complete the activity.</p>
            </div>
            <div className="flex gap-3">
              <p className="text-4xl font-semibold text-primary flex items-center">4</p>
              <p>Look for more tags! Your progress will be tracked in the progress bar above.</p>
            </div>
            <div className="flex gap-3">
              <p className="text-4xl font-semibold text-primary flex items-center">5</p>
              <p>If you get stuck, ask for a hint by clicking on the “hint” button</p>
            </div>
            <div className="flex gap-3">
              <p className="text-4xl font-semibold text-primary flex items-center">6</p>
              <p>Once you’ve located and completed the activity for each tag, show your completed screen to the site manager to earn a small prize!</p>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog" className="w-full">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-primary w-full">GOT IT!</button>
            </form>
          </div>
        </div>
      </dialog>

    </section>
  )
}