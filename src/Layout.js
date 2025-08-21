/*import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <nav style={{display:'flex', justifyContent:'space-between',alignItems:'center', padding:'10px', backgroundColor:'Highlight'}}>
            <div style={{display:'flex', gap:'10px'}}>
                <Link to='/layout/home'>Home</Link>
              
                <Link to='/layout/about'>About</Link>
                
                <Link to='/layout/academic'>Academic</Link>
                <Link to='/layout/gallery'>Gallery</Link>
                <Link to='/layout/admission'>Admissions</Link>
            </div>
            <div style={{display:'flex', gap:'10px'}}>
                  <Link to='/layout/contact'>Contact us</Link>
            </div>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Layout*/

import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center shadow-md sticky top-0">
        <div className="text-xl font-bold">
          <Link to="/layout/home">🏫 Gurukul Siksha Niketan</Link>
        </div>
        <div className="flex gap-6">
          <Link to="/layout/home" className="hover:text-yellow-300">Home</Link>
          <Link to="/layout/about" className="hover:text-yellow-300">About</Link>
          <Link to="/layout/academic" className="hover:text-yellow-300">Academic</Link>
          <Link to="/layout/gallery" className="hover:text-yellow-300">Gallery</Link>
          <Link to="/layout/admission" className="hover:text-yellow-300">Admissions</Link>
          <Link to="/layout/contact" className="hover:text-yellow-300">Contact</Link>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-grow p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center p-4">
        <p>© 2025 Gurukul Siksha Niketan | All Rights Reserved</p>
        <p>📍 Tulin,Jhalda, Purulia W.B.| 📞 +91-98********</p>
      </footer>
    </div>
  )
}

export default Layout
