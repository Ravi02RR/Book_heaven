
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Books from './Pages/Books'
import Explore from './Pages/Explore'
import About from './Pages/About'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
