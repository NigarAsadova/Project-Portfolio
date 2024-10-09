import './App.css'
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom'
import Heading from './components/Heading/Heading.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Cv from './pages/Cv/Cv.jsx'
import Blog from './pages/Blog/Blog.jsx'
import Home from './pages/Home/Home.jsx'
import NotFound from './pages/NotFound/NotFound'
import Portfolio from './pages/Portfolio/Portfolio'
import Service from './pages/Service/Service'
import Footerr from './components/Footerr/Footerr.jsx'
function App() {
  return (
    <div className='all-cover' >
      <Router>
        <Heading />
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/Portfolio' element={<Portfolio />}></Route>
          <Route path='/Services' element={<Service />}></Route>
          <Route path='/Cv' element={<Cv />}></Route>
          <Route path='/Blog' element={<Blog />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/*' element={<NotFound />}></Route>
        </Routes>
        <Footerr />
      </Router>
    </div>
  )
}
export default App
