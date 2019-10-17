import React from 'react';
import logo from './logo.svg';
import './App.css';

import useForm from './hooks/form-hook';


function App() {
  const data = useForm(process.env.WIKI_API_URL, 'bianca')
  return (
    <div className="App">
     <div>{data}</div>;
    </div>
  );
}

export default App;
