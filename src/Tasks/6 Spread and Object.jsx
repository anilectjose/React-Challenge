//Spread- Used to cut the values in object to different parts and assign
//By creating a object  we can access the data to the page. this is same as from a database 

import React,{useState} from 'react'

function App() {
  const [count,setCount] = useState(0)

  const addCount=()=>{ 
    setCount(count+1);
  }
  let obj={
    title:'Counter from obj',
    abc:count,
    qwe:'qwe'
  }
  return (
    <div style={{ background: 'lightblue' }}>
      <button onClick={addCount}>Add</button>
          <h1>Simple Counter: {count}</h1> 
      <Counter {...obj}/>
      <Counter title='Counter with title with obj' qwe='qwe' abc={obj.abc}/>
      <Counter title='Counter with title' qwe='qwe' abc={count}/>
    </div>
  );
}

export default App;

function Counter(props) {   //We can also add props and can also add them in starting by Destructuring
  const {title, qwe}=props  // Also we can give this variables inside the function parameter area Counter({title,qwe}) insteadof props
  return (
      <div>
          <h1>{title}: {props.abc} {qwe}</h1>
      </div>
  )
}