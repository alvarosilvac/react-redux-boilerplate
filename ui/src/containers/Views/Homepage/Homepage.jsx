import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMessage, increment} from '../../../actions/dataActions';

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
      dispatch(setMessage(_message))
    }, [dispatch]
  )
  const messageRef = useRef()


  const [name, setName] = useState("")

  const handleInputName = (e) => {
    setName(e.target.value)
  }

  const handleInputMessage = (e) => {
    setTempMessage(e.target.value)
    messageRef.current = e.target.value
  }

  useEffect(() => {
    console.log('I changed')
  }, [name])

  return(
    <>
    <input type="text" onChange={handleInputName} value={name} />
    <h6>Name: {name}</h6>
    <input type="text" onChange={handleInputMessage} value={tempMessage} />
    <h6>Message: {message}</h6>
    <button onClick={saveMessage}>Submit Message</button>
    <button onClick={addCount}>{count}</button>
    </>
  )
}

export default Homepage;