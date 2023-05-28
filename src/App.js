
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import NotFound from './components/pages/NotFound'
import Portfolio from './components/pages/Portfolio'
import Resume from './components/pages/Resume'
import NavTabs from './components/NavTabs'




const App = () => {
  return (
    <BrowserRouter>
      <NavTabs/>
        <Routes>
          <Route path='/' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/*' element={<NotFound/>}/>
          <Route path='/Portfolio' element={<Portfolio/>}/>
          <Route path='/Resume' element={<Resume/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
