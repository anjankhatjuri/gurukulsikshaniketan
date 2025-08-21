import React from 'react'

function Home() {
  return (
    <div>
      {/* Notification Bar */}
      <div className="bg-yellow-400 text-black font-semibold overflow-hidden">
        <div className="whitespace-nowrap animate-marquee py-2">
          📢 Admissions are now open for 2025–26! | 🎉 Annual Sports Day on 15th September | 🏆 Congratulations to our students for excellent board results!
        </div>
      </div>
{/* Hero Section */}
<section className="relative bg-[url('https://source.unsplash.com/1600x600/?school,education')] bg-cover bg-center h-80 flex items-center justify-center text-white text-center">
  {/* Softer Professional Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-600 to-teal-500 opacity-75"></div>

  <div className="relative z-10 p-6 rounded-lg">
    <h1 className="text-4xl font-bold drop-shadow-md">Welcome to Gurukul Siksha Niketan</h1>
    <p className="mt-2 text-lg drop-shadow-md">Nurturing Minds, Building Futures</p>
  </div>
</section>



      {/* Highlights Section */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-blue-700">🏅 Achievements</h2>
          <p className="mt-2 text-gray-600">Our students consistently excel in academics and sports.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-blue-700">📚 Academics</h2>
          <p className="mt-2 text-gray-600">Well-structured curriculum from Nursery to Class XII.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-blue-700">🎉 Admissions Open</h2>
          <p className="mt-2 text-gray-600">Enroll now for the academic year 2025–26.</p>
        </div>
      </section>
    </div>
  )
}

export default Home
