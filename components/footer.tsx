import React from 'react'

const Footer = () => {
  return (
    <div className='bg-teal-300 w-full fixed bottom-0 '>
        
        <div className='container mx-auto p-4'>
            <div className='flex justify-center items-center'>
               
                <div>
                    <ul className='flex space-x-4 text-xs lg:text-lg font-light text-neutral-900'>
                        <li>Now Showing</li>
                        <li>Coming Soon</li>
                        <li>Top Rated</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer