import React from 'react';
import Header from './Header'
import '../styles/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header name="Tom" timeOfDay="Morning"/>
      <div>Your word of the day is:</div>
    </div>
  );
}

export default App;
