import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Random from './component/Random'
import Tag from './component/Tag'

function App() {
  return (
    <div className="w-full min-h-screen p-8 flex flex-col background relative overflow-x-hidden items-center">
      <h1 className=" bg-white rounded-xl text-center w-full px-10 py-3 text-xl lg:text-3xl font-bold " >
        Ramdom Gifs
      </h1>
      <div  className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App
