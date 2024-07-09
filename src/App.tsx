import React from 'react';
import './App.css';
import StatusBar from './components/StatusBar';
import SaveButton from './components/SaveButton';

function App() {
  return (
    <div className="App">
      <StatusBar />
      <hr style={{width: '50%', marginLeft: 0, marginBottom: '2rem'}} />
      <SaveButton />
    </div>
  );
}

export default App;
