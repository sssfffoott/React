import { Routes, Route } from 'react-router-dom';


import './App.css'
import Header from "./components/Header"
import ProfileCard from "./components/ProfileCard"

import Home from './pages/Home';
import Profile from './pages/Profile';
import Setting from './pages/Setting';
import About from "./pages/About";


function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Profile" element={<Profile />}/>
          <Route path="/Setting" element={<Setting />}/>
          <Route path="/About" element={<About />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
