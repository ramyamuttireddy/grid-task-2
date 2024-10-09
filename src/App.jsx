import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='grid grid-cols-6 gap-y bg-[#F8F4F0;]'>

      

        <div className='bg-black row-span-6  p-30 text-white '>
          {/* <h2 className="text-white text-left font-['Alegreya_SC'] text-[30px]">Font Size And Font Family</h2>

          <p className='text-[20px] subpixel-antialiased '>Font Smoothing</p>
          <p className='text-[20px] antialiased '>Font Smoothing</p>

        
           
          <p className='text-[20px]  italic'>Font Style</p>
          
         

          <p className='text-[20px]  font-thin'>Font Weight</p>
          <p className='text-[20px]  font-extralight'>Font Weight</p>
          <p className='text-[20px]  font-light'>Font Weight</p>
          <p className='text-[20px]  font-normal'>Font Weight</p>
          <p className='text-[20px]  font-medium'>Font Weight</p>
          <p className='text-[20px]  font-semibold'>Font Weight</p>
          <p className='text-[20px]  font-bold'>Font Weight</p>
          <p className='text-[20px]  font-extrabold'>Font Weight</p>
          <p className='text-[20px]  font-black'>Font Weight</p>  */}

        </div>


        {/* white Container  */}

        <div className=' col-span-5 grid gap-10 p-10'>

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
