import { useState } from 'react'
import GetMethod from './APIComponent/GetMethod'
import POSTMethod from './APIComponent/POSTMethod'
import PreviousProps from './APIComponent/PreviousProps'
import PreviousState from './APIComponent/PreviousState'
import './App.css'
import StateWithObject from './APIComponent/StateWithObject'

function App(){
  let [count,setcount]=useState(0)

  return (
    <>
      <GetMethod />
      <POSTMethod/>
      <PreviousState/>
      <PreviousProps count={count}/>
      <button onClick={()=>setcount(Math.floor(Math.random()*10))}>Update</button>
      <StateWithObject/>   
    </>
  )
}

export default App
