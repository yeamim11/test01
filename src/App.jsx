import React from 'react'
import Test from './Component/Test/Test'
import Tset2 from './Component/Test2/Tset2'
import Videolink from './Component/Test2/Videolink'
import Jadu from './Component/Jadu'
// import From from './Component/From/from'
const App = () => {
  return (
    <div className=''>
      <h1 className='text-center text-5xl font-bold bg-black text-white'>Git Test</h1>
      <p className='text-2xl text-center text-blue-500'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, nobis vitae. Laboriosam cumque assumenda, inventore tempora commodi ducimus dolorem debitis ab? Ratione commodi itaque deleniti eveniet esse saepe nulla eaque?
      </p>
      <Test/>
      <Tset2/>
      <Videolink/>
      <Jadu/>
      {/* <From/> */}
      
    </div>
  )
}

export default App
