import { useContext, useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { myContext } from './components/contextPage/Context'
import Container from './components/container/Container'

function App() {

const {theme} = useContext(myContext)


  const [count, setCount] = useState(0)
  const [text,setText] = useState('')

  // useEffect(()=>{
  //   console.log("Lets see how many counts:",count)
  // },[count])
  // useEffect(()=>{
  //   console.log("I SEE:",text)
  // },[text])
  function increment(){
    setCount(Math.min(count +1,10))
    
  }
  function decrement(){
    setCount(Math.max(count -1 ,0))
   
  }
  function handleText(e){
    setText(e.target.value)
    console.log(text)
  }
  function clearText(){
    setText("")
  }

  return (
    <Container>

   <div className={`${theme?"bg-light-500":"bg-gray-500"} ${theme?"text-gray-500":"text-white"} min-h-screen`}>
         <div className={`${count==1?"bg-orange-100":"" || count==2?"bg-orange-200":"" || count==3?"bg-orange-300" :""|| count==4?"bg-orange-400" :""|| count==5?"bg-orange-500":"" || count==6?"bg-orange-600":"" || count==7?"bg-orange-700":"" || count==8?"bg-orange-800":""|| count==9?"bg-orange-900":""}`}>
           <div className=''>
            <p className='pb-[2rem]'>
           </p>
            <input className=' border-double border-4 border-blue-500 text-blue-500'  value={text} onChange={handleText} placeholder='Whats on your mind'/>
            <p className='pt-[1rem]'><button className='bg-red-500 w-[5rem] rounded-xl' onClick={clearText}>Clear</button></p>
           <p className='pt-[2rem]'>Tell ME SECRETLY NOW; {text}</p>
           <button className='border-double border-4 border-blue-500 h-10 rounded-2xl bg-green-400' onClick={increment}>You Have Clicked Me {count} times </button>

           </div>
           <div>
            <p className='text-5xl font-bold'>{count}</p>
            <div className='flex item-center justify-center gap-[5rem] text-2xl p-[2rem]'>
             <p className='bg-yellow-500 w-[3rem] rounded-xl' onClick={increment}>{`${count>=10?"":"+"}`}</p>
             <p className='bg-red-500 w-[3rem] rounded-xl' onClick={decrement}>{`${count<=0?"":"-"}`}</p>
          </div>
             <button className='rounded-[3rem] bg-red-500 text-white w-[5rem]' onClick={()=>{setCount(0)}}>RESET</button>
          </div>
      </div>
   </div>
   
    </Container>
  )
}

export default App
