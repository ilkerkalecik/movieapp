'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../public/indir.png'

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='w-full bg-neutral-100 border-b border-neutral-300'>
      <div className='container mx-auto px-4' >
        <div className='flex justify-between items-center py-4'>
          <Image className='aspect-square w-14' src={logo} alt="Logo" />
          <div className='space-x-4 text-neutral-700 font-light hidden lg:flex'>
            <a href='/' className=''>Home</a>
            <a href='/movies' className=''>Movies</a>
            <a href='/tvshows' className=''>TV Shows</a>
            <a href='/about' className=''>About</a>
          </div>
          <button className='lg:hidden' onClick={() => setSidebarOpen(!sidebarOpen)}>
            <svg className='w-6 h-6 text-neutral-700' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
            </svg>
          </button>
        </div>
        <div className={`fixed top-0 p-5 right-0 h-full bg-neutral-100 shadow-lg transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
          <div className='flex flex-col space-y-4 text-neutral-700 font-light p-4'>
            <button className='self-end' onClick={() => setSidebarOpen(false)}>
              <svg className='w-6 h-6 text-neutral-700' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
              </svg>
            </button>
            <a href='/' className=''>Home</a>
            <a href='/movies' className=''>Movies</a>
            <a href='/tvshows' className=''>TV Shows</a>
            <a href='/about' className=''>About</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar