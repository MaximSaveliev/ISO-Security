import React from 'react'
import { useState, useEffect } from 'react';

import vulnerabilities from '../database/vulnerabilities'

export default function Modal({ adviceList, prompt }) {
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        if (showModal) {
          // Add a class to the body to disable scrolling
          document.body.classList.add('overflow-y-hidden');
        } else {
          // Remove the class from the body to re-enable scrolling
          document.body.classList.remove('overflow-y-hidden');
        }
      }, [showModal]);
    return (
        <>
            <button type="button"
                className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                onClick={() => setShowModal(true)}>Advice</button>
            {showModal ? (
                <>
                    <div className='h-screen flex fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-hidden md:inset-0 max-h-full mx-auto bg-slate-500/50'>
                        <div class="relative w-full max-w-2xl max-h-full m-auto ">
                            <div id="advice_scroll" class="relative max-h-[750px] overflow-x-auto bg-white rounded-lg shadow dark:bg-gray-700">
                                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                        {prompt}
                                    </h3>
                                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setShowModal(false)}>
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </div>
                                <div class="p-6 space-y-6">
                                    {adviceList.map((advice, index) => (
                                        <p key={index} className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                            {advice}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    )
}
