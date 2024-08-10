import { useState } from 'react'
import Comments from '../Component/Comments/Comments'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Comments></Comments>
    </>
  )
}

export default App
