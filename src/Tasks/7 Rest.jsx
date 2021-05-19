//Rest
//Getting the specific values from the object that we need using ... before obj name

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
      <Counter title='Counter with title' abc={count} />
    </div>
  );
}

export default App;

function Counter({title, ...obj}) {  
  return (
      <div>
          <h1>{title}: {obj.abc} {obj.qwe}</h1>
      </div>
  )
}