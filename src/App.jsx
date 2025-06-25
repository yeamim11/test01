import React from 'react'
import Test from './Component/Test/Test'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-gray-100'>
      <h1 className='text-center text-5xl font-bold bg-black text-white'>Git Test</h1>
      <p className='text-2xl text-center text-blue-500'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, nobis vitae. Laboriosam cumque assumenda, inventore tempora commodi ducimus dolorem debitis ab? Ratione commodi itaque deleniti eveniet esse saepe nulla eaque?
      </p>
      <Test/>
    </div>
  )
}

export default App
