import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { goBack } from 'connected-react-router';

const TestView = () => {

  const dispatch = useDispatch()

  const back = useCallback(
    () => dispatch(goBack()),
    [dispatch]
  )

  return(
    <>
      <h2>TEST ROUTER PAGE</h2>
      <button onClick={back}>Back</button>
    </>
  )
}

export default TestView;