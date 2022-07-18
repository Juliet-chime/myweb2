import React, { useState,useRef } from 'react'

const Contact = () => {
  const [message, setMessage] = useState('')
  const [showButton, setShowButton] = useState(true)

  const InputRef = useRef(0)

  const onButtonClick =() => {
    setShowButton(false)
    setMessage('thank you')
  }

  return (
    <div>
      {showButton && <button onClick ={onButtonClick}>click me</button>}
      <p>{message}</p>
      <input type="text"/>
      <p>fddfdghdgddhdfg</p> 
      <p>dfgshjkal</p>
    </div>
  )
}

export default Contact

