import { useEffect } from "react"
import { useState } from "react"


const Person = () => {
  return (
    <>
      <h1>Name : John </h1>
      <h1>Age : 20 </h1>
      <h1>Gender : Male </h1>

    </>
  )
  
}


const App = () => {

  const isShow = true

  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(100)
  }, [])

  const handlePlus = () => {
    return setCount((pre) => pre + 1)
  }

  const handleMinus = () => {
    return count > 0 ? setCount((pre) => pre - 1) : setCount(0)    
  }

  return (
    <div>

      <Person/>

      <button onClick={handlePlus}>+</button>
      <h1>{count}</h1>
      <button onClick={handleMinus}>-</button>


    </div>
  )
}

export default App