import { useState } from 'react'
import './App.css'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0);
  function getData(data){
    console.log("Getting data:"+data);
  }
function getData(data)
{
  console.log("This is from the APp"+data);
}

  return (     
    <Login onSubmit={ getData }/>
  )
}
export default App
