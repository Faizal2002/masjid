
import './App.css'
import Hero from './Hero';
import Header from './Header'
import About from './About';
import PrayerTimings from './Prayer';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Events from './Events';
import Contact from './Contact';
function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
