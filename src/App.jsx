import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './component/Index'
import "./index.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Index/> */}
      <p>
        ola
      </p>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App
