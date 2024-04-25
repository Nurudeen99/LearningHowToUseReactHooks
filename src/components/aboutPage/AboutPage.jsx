import React, { useContext } from 'react'
import Container from '../container/Container'
import { myContext } from '../contextPage/Context'

const AboutPage = () => {
    const {theme,toggleTheme} = useContext(myContext)
  return (
    <Container>
        <div className={`${theme?"bg-light-500":"bg-gray-500"} ${theme?"text-gray-500":"text-white"} min-h-screen`}>
            <div className='text-5xl font-bold p-[5rem]'>AboutPage</div>
            <p className='text-5xl font-bold'>We love to code</p>
        </div>
         
    </Container>
   
  )
}

export default AboutPage