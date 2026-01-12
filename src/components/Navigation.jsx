import React from 'react'
import { cn } from '../utils'

const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-primary">Coffee Ecosystem</div>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-accent transition">Home</a></li>
          <li><a href="#features" className="hover:text-accent transition">Features</a></li>
          <li><a href="#about" className="hover:text-accent transition">About</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation