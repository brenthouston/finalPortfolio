
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './components/pages/About'
import ContactUs from './components/pages/Contact'
import NotFound from './components/pages/NotFound'
import Portfolio from './components/pages/Portfolio'
import Resume from './components/pages/Resume'
import CodeBlog from './components/pages/CodeBlog'
import NavTabs from './components/NavTabs'
import Footer from './components/Footer'



const App = () => {
  return (
    <BrowserRouter>
      <NavTabs/>
        <Routes>
          <Route path='/' element={<About/>}/>
          <Route path='/Contact' element={<ContactUs/>}/>
          <Route path='/*' element={<NotFound/>}/>
          <Route path='/Portfolio' element={<Portfolio/>}/>
          <Route path='/Resume' element={<Resume/>}/>
          <Route path='/code-blog' element={<CodeBlog/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>

  );
}

export default App;
