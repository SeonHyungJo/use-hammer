import React, { useState, useCallback } from 'react'
import useHammer from 'use-hammer'

const App = () => {
  const [draggable, setDraggable] = useState(false)
  const onHammer = useCallback(() => {
    setDraggable(true)
  }, [])

  const handleDragEnd = useCallback(() => {
    hammerUp()
    setDraggable(false)
  })

  const [hammerDown, hammerUp] = useHammer({ onHammer })
  return (
    <div
      className={"sample-div"}
      draggable={draggable}
      onMouseDown={() => hammerDown()}
      onMouseUp={() => hammerUp()}
      onDragEnd={() => handleDragEnd()}
      >
      {`Please Long Press for 700ms / Draggable : ${draggable}`}
    </div>
  )
}
export default App
