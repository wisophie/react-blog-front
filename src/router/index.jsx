import App from '../App'
import BlogArticles from '../pages/BlogArticles'
import Projects from '../pages/Projects'
import Home from '../pages/Home'
import Article from '../pages/Article'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'


const BaseRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path='/' element={<App />}>
        <Route path='/post/:code' element={<Article />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/blogArticles' element={<BlogArticles />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Route>
    </Routes>
  </Router>
)
export default BaseRouter 