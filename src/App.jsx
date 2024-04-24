import { useContext, useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { myContext } from './components/contextPage/Context'

   function App() {

const {theme,toggleTheme} = useContext(myContext)


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
    <div className={`${count<=5?"bg-blue-400":"bg-gray-500"}`}>
     <div className=''>
      <p className='pb-[2rem]'>
        <button className='border-double border-4 border-blue-500 h-10 rounded-2xl bg-green-400' onClick={increment}>You Have Clicked Me {count} times </button>
        <button className={`rounded-[3rem] ${theme?'bg-pink-50':'bg-gray-900'} ${theme?'text-dark':'text-white'} w-[5rem]`} onClick={toggleTheme}>Click to toggle to {`${theme?"dark":"light"}`}</button>
      </p>
       <input className=' border-double border-4 border-blue-500 text-blue-500'  value={text} onChange={handleText} placeholder='Whats on your mind'/>
       <p className='pt-[1rem]'><button className='bg-red-500 w-[5rem] rounded-xl' onClick={clearText}>Clear</button></p>
       <p className='pt-[2rem]'>Tell ME SECRETLY NOW; {text}</p>
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
   
  )
}

export default App
