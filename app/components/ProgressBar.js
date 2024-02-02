'use client'
import { useContext, useRef, useEffect} from 'react'
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

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="instructions_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-3xl mb-4 font-cabinSketch">Welcome to the Capitol Reef Field Station Scavenger Hunt!</h3>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
                <p className="text-4xl font-semibold text-primary flex items-center">1</p>
                <p>Connect to the wifi: Wilderness, Password: CRFS</p>
            </div>
            <div className="flex gap-3">
                <p className="text-4xl font-semibold text-primary flex items-center">2</p>
                <p>Search the station for signs and scan the located chip</p>
            </div>
            <div className="flex gap-3">
                <p className="text-4xl font-semibold text-primary flex items-center">3</p>
                <p>Learn about Captiol Reef, do the activity, and earn a special prize at the end</p>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog" className="w-full">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-primary w-full">Got It!</button>
            </form>
          </div>
        </div>
      </dialog>

    </section>
  )
}