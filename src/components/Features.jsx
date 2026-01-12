import React from 'react'
import { Coffee, Zap, Shield } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Coffee,
      title: 'Premium Coffee Selection',
      description: 'Curated collection of world-class coffee beans'
    },
    {
      icon: Zap,
      title: 'Instant Ordering',
      description: 'Quick and seamless ordering through Telegram'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'Highest quality standards in every cup'
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Our Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <feature.icon className="mx-auto mb-4 text-accent" size={64} />
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features