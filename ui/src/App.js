import React, {useState, useEffect} from 'react';
import './styles/App.css';
import Routes from './routes';
import { useLocation } from 'react-router-dom';

const App = () => {

  const location = useLocation();
  const [currLocation, setLocation] = useState("/")

  useEffect(() => {
    setLocation(location.pathname)
  },[])

  useEffect(() => {
    setLocation(location.pathname)
  }, [location])


  return (
    <>
      <Routes location={ currLocation }/>
    </>
  );
}

export default App;
