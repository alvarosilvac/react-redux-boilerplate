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
    <div className="App">
      <Routes location={ currLocation }/>
    </div>
  );
}

export default App;
