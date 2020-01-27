import React, { useCallback } from 'react'
import useHammer from 'use-hammer'


const App = () => {
  const onHammer = useCallback(() => {
    console.log('Long Press')
  }, [])

  const [hammerDown, hammerUp] = useHammer({onHammer})
  return (
    <div className={"sample-div"} onMouseDown={()=> hammerDown()} onMouseUp={() => hammerUp()}/>
  )
}
export default App
