import { useState } from 'react'
import './App.css'
import Index from './component/Index'
import "./index.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Index/>
    </>
  )
}

export default App
