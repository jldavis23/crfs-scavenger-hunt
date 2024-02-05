'use client'
import { useState } from 'react';

export const HuntCompleteModal = () => {

    return (
        <div>
            {/* Scavenger Hunt Complete Modal */}
            {/* <button className="btn" onClick={() => document.getElementById('completed_modal').showModal()}>open modal</button> */}
            <dialog id="completed_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-3xl mb-4 font-cabinSketch">Scavenger Hunt Complete!</h3>

                    <div className='flex gap-3 py-3'>
                        <a href="/huntcompleted" className='btn btn-primary text-white order-last'>VIEW YOUR CERTIFICATE →</a>
                        <button className='btn' onClick={() => document.getElementById('completed_modal').close()}>CLOSE</button>
                    </div>
                </div>
            </dialog>
        </div>
    )
}