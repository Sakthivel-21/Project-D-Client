import React, { useState } from 'react'
import ButtonComponent from '../Components/ButtonComponent'
import sidebar from '../assets/side.png'
import Login from './Login'
import Register from './Register'
import { Link } from 'react-router-dom'

function Navbar() {

   const [show , setShow] = useState(false)

   {/*const showingPage = () => {
    if(show == false) {
         setShow(true)
    }
    else {
        setShow(false)
    }
   }*/}

    return (
        <>
            <div className="  flex">

                <h1 className='font-bold flex pt-4 sm:pl-24 pl-4   md:text-2xl sm:text-4xl text-lg'>Dindigul City</h1>

                <ul className='hidden flex list-none ml-64 mt-6 md:block lg:flex '>
                    <li className='pl-12'>Home</li>
                    <li className='pl-12'>Offers</li>
                    <li className='pl-12'>List Business</li>
                    <li className='pl-12'>About us</li>
                    <li className='pl-12'>Contact us</li>
                </ul>

               <ButtonComponent 
               className='hidden bg-blue-300 ml-72 mt-4 hover:bg-blue-400 md:block lg:flex' ><Link to='/login'>Login</Link></ButtonComponent>

               <img src={sidebar} className='h-6 w-8 mt-5 sm:hidden block ml-[40%] mr-[5%] ' ></img>
            </div>

          

          
        </>
    )
}

export default Navbar