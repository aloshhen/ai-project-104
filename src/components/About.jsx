import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto flex items-center">
        <div className="w-1/2 pr-12">
          <h2 className="text-4xl font-bold mb-6">How Our Ecosystem Works</h2>
          <p className="text-lg mb-4">A seamless integration of technology and coffee culture.</p>
          <ul className="space-y-3 pl-5 list-disc">
            <li>Order via Telegram Mini App</li>
            <li>Real-time tracking and updates</li>
            <li>Personalized coffee recommendations</li>
          </ul>
        </div>
        <div className="w-1/2">
          <img 
            src="/placeholder-about.jpg" 
            alt="Coffee Ecosystem" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}

export default About