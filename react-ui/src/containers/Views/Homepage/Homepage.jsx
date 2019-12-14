import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMessage, increment } from '../../../actions';
import { push } from 'connected-react-router';
import logo from '../../../logo.svg';

const Homepage = () => {

  const dispatch = useDispatch()

  const count = useSelector(state => state.data.count)
  const addCount = useCallback(
    () => dispatch(increment()),
    [dispatch]
  )

  const [tempMessage, setTempMessage] = useState("")
  const message = useSelector(state => state.data.message)
  const saveMessage = useCallback(
    () => {
      const _message = messageRef.current
      if(!_message)
        window.alert("No message to send!")
      else
        dispatch(setMessage(_message))
    }, [dispatch]
  )
  const messageRef = useRef()

  const [name, setName] = useState("")

  const goTest = useCallback(
    () => dispatch(push("test")),
    [dispatch]
  )

  const resetData = useCallback(
    () => {
      setName("")
      setTempMessage("")
      dispatch({ type: 'RESET_DATA' })
    },
    [dispatch]
  )

  const handleInputName = (e) => {
    setName(e.target.value)
  }

  const handleInputMessage = (e) => {
    setTempMessage(e.target.value)
    messageRef.current = e.target.value
  }

  useEffect(() => {
    if(name)
      console.log(`My new name is ${name}`)
  }, [name])

  return(
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <h2>WELCOME TO REACT REDUX BOILERPLATE</h2>
      <div>
        <h5>Insert Name (Local State)</h5>
        <input type="text" onChange={handleInputName} value={name} />
        <h6>Name: {name}</h6>
      </div>
      <div>
        <h5>Insert Message (Redux State)</h5>
        <input type="text" onChange={handleInputMessage} value={tempMessage} />
        <h6>Message: {message}</h6>
        <button onClick={saveMessage}>Submit Message</button>
      </div>
      <br/>
      <div>
        <h5>Counter (Redux State)</h5>
        <button onClick={addCount}>{count}</button>
      </div>
      <br/>
      <button onClick={goTest}>Test Routing</button>
      <button onClick={resetData}>Reset Data</button>
    </>
  )
}

export default Homepage;