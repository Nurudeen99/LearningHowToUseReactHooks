import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../contextPage/Context'

const Container = ({children}) => {
    const {theme,toggleTheme} = useContext(myContext)

  return (
    <>
       <div>
            <nav className='flex justify-evenly bg-green-700 text-white h-[2rem] items-center text-xl  rounded-sm'>
                <Link to="/">Home</Link>
                <div>LogIn</div>
                <div>SignUp</div>
                <Link to="/aboutPage">AboutUs</Link>
                <button className={`w-[rem] rounded-[3rem] ${theme?'bg-white-50':'bg-gray-900'} ${theme?'text-dark':'text-white'} `} onClick={toggleTheme}>Click to toggle to {`${theme?"dark":"light"}`} mode</button>

            </nav>
        {children}
       </div>
    </>
  )
}

export default Container