import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  useEffect(()=>{
    console.log("Mount Call");
  })
  const [count,setcount]=useState(0);
  return (
    <>
    <h4>UseEffect Hooks</h4>
    <p>{count}</p>
    <button onClick={()=>setcount(count+1)}>Update State</button>
    </>
  );
}

export default App;
