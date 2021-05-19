//Map
//Used to get multiple data

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
            emp.map((obj,index)=>{ //Here  obj is object and index is a key/ primary key we can change this names
              return(
                <Employee key={index} name={obj.name} age={obj.age} place={obj.place} />
              )
            })
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