import React from 'react';
import './styles/App.css';
import Routes from './routes';
import ErrorBoundary from './components/error/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <div className="App">
        <Routes/>
      </div>
    </ErrorBoundary>
  );
}

export default App;
