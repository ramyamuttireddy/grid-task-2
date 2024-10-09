import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='grid grid-cols-8 w-[1140px] bg-[#F8F4F0;] m-auto shadow-xl mt-[20px]'>

        {/* Black Container */}

        <div className='bg-black col-span-2   text-white '></div>

 
        {/* white Container  */}

        <div className=' col-span-6 grid gap-10 p-10'>

          <div><h1 className='text-[32px] font-bold text-left'>Over View</h1></div>

          {/* Three Grid */}
          <div className='grid grid-cols-3 gap-4'>
            <div className='bg-white p-10 rounded-[10px] shadow-xl '>1</div>
            <div className='bg-white p-10 rounded-[10px] shadow-xl '>2</div>
            <div className='bg-white p-10 rounded-[10px] shadow-xl '>3</div>
          </div>


          <div className='grid grid-cols-4 grid-rows-6 gap-4'>
            <div className='bg-white col-span-2 row-span-2 p-20 rounded-[10px] shadow-xl '>1</div>
            <div className='bg-white col-span-2 row-span-3 p-20 rounded-[10px] shadow-xl '>2</div>
            <div className='bg-white col-span-2 row-span-4 p-20 rounded-[10px] shadow-xl '>3</div>
            <div className='bg-white col-span-2 row-span-3 p-20 rounded-[10px] shadow-xl '>4</div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
