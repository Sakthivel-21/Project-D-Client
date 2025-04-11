import { useState } from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
//import InputComponent from './Components/InputComponent'
import Hero from './Pages/Hero'
import Categories from './Pages/Categories'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'
import CategoriesForm from './Pages/CategoriesForm'
import CategoriesDetails from './Pages/CategoriesDetails'
import CategoriesList from './Pages/CategoriesList'
import Contact from './Pages/Contact'
import Mission from './Pages/Mission'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar/>
         <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/categories' element={<Categories/>}></Route>
           <Route path='/login' element={<Login/>}></Route>
           <Route path='/register' element={<Register/>}></Route>
           <Route path='/categories/form' element={<CategoriesForm/>}></Route>
           <Route path='/dindigul/categories/:id/places/' element={<CategoriesList/>}></Route>
           <Route path='/dindigul/places/:id/' element={<CategoriesDetails/>}></Route>
           <Route path='/contact' element={<Contact/>}></Route>
           <Route path='/mission' element={<Mission/>}></Route>
        </Routes> 
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
