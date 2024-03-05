'use client'
import { useContext, useRef, useEffect, useState } from 'react'
import { ProgressDataContext } from '../context/ProgressDataContext'
import { gsap } from "gsap"

export const ProgressBar = () => {
  //VARIABLES
  const { progressData } = useContext(ProgressDataContext)
  const completedTags = Object.keys(progressData).filter(tag => progressData[tag].completed)
  let percentComplete = (completedTags.length / Object.keys(progressData).length) * 100
  const bar = useRef(null)


  //HOOKS
  useEffect(() => {
    const progressBar = bar.current
    progressBar.style.width = '0%'

    gsap.to(progressBar, {
      width: `${percentComplete}%`,
      duration: 0.3, // Adjust the duration as needed
    });
  }, [percentComplete])


  return (
    <section>
      <div className="flex gap-3 p-4 fixed top-0 w-full min-h-[86px] z-50 bg-white shadow">
        <div className='flex gap-2'>
          <a href="/" className='btn btn-circle'><img src="images/icons/SP_Home_Icon.svg" alt="Home"/></a>
          {/* <button className='btn btn-circle btn-sm' onClick={() => document.getElementById('instructions_modal').showModal()}>i</button> */}
        </div>
        <div className='w-full'>

          <div className="relative w-full h-7 border border-black rounded-full overflow-hidden">
            <div
              ref={bar}
              className="absolute top-0 left-0 h-full bg-info" // Can use the class transition-all to replace the gsap animation if wanted
              style={{ width: `${percentComplete}%` }}
            ></div>
          </div>

          <div className='flex justify-end mt-2 items-center'>
            <p className="mr-2 text-[15px]"><span className="font-bold">{completedTags.length}</span> out of <span className="font-bold">{Object.keys(progressData).length}</span> complete</p>

            <a href="/instructions">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#808080" viewBox="0 0 256 256"><path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
            </a>
            
          </div>
          
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