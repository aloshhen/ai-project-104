import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-2xl font-bold mb-4">Coffee Ecosystem</h4>
          <p>Revolutionizing coffee experience through technology</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-accent">Home</a></li>
            <li><a href="#features" className="hover:text-accent">Features</a></li>
            <li><a href="#about" className="hover:text-accent">About</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
          <p>Email: support@coffeeecosystem.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        © 2024 Coffee Ecosystem. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer