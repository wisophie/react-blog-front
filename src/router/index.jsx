import React from "react";
import { App } from '../App'
// import BlogArticles from '../pages/BlogArticles'
// import Projects from '../pages/Projects'
// import Home from '../pages/Home'
// import Article from '../pages/Article'
// import Activity from '../pages/Activity'
// import Contact from '../pages/Contact'
// import Login from '../pages/Login'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Nprogress } from '../Components/jsx'

const Home = React.lazy(() => import('../pages/Home'));
const Article = React.lazy(() => import('../pages/Article'));
const Contact = React.lazy(() => import('../pages/Contact'));
const Activity = React.lazy(() => import('../pages/Activity'));
const Login = React.lazy(() => import('../pages/Login'));
const Projects = React.lazy(() => import('../pages/Projects'));
const BlogArticles = React.lazy(() => import('../pages/BlogArticles'));
const Register = React.lazy(() => import('../pages/Register'));
const BaseRouter = () => (

  <Router>
    <React.Suspense fallback={<Nprogress></Nprogress>}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/' element={<App />}>
          <Route path='/post/:code' element={<Article />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/activity' element={<Activity />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/blogArticles' element={<BlogArticles />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Route>
      </Routes>
    </React.Suspense>
  </Router>
)
export default BaseRouter 