//Map
//Simple code of previous by using arrow func

import React,{useState} from 'react'

function App() {
  const [count,setCount] = useState(0)
  const addCount=()=>{ 
    setCount(count+1);
  }
  
  let emp=[{
    name:'Ani',
    age:22,
    place:'mndy'
  },{
    name:'Arjun',
    age:21,
  }]

  return (
    <div style={{ background: 'lightblue' }}>
      <button onClick={addCount}>Add</button>
          <h1>Simple Counter: {count}</h1> 
          {
            emp.map((abc,pkey)=>
                <Employee key={pkey} {...abc} />
            )
          }
    </div>
  );
}

export default App;

function Employee(props) {  
  return (
      <div>
          <h1>Name: {props.name} <br/>Age:{props.age}<br/> Place: {props.place}</h1>
      </div>
  )
}