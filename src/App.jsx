import { useState } from 'react'
import './App.css'
import Index from './component/Index'
import "./index.css"
import Title from './component/Title'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title/>
      <Index/>
    </>
  )
}

export default App
