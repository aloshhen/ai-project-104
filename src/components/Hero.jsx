import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Coffee Ecosystem</h1>
        <p className="text-xl mb-8">Revolutionizing Coffee Experience with High-Tech Solutions</p>
        <div className="space-x-4">
          <button className="bg-accent px-6 py-3 rounded-full hover:scale-105 transition">
            Order Now
          </button>
          <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-primary transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero