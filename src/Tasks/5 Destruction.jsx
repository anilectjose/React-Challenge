//From a counter/file called Counter.jsx we are accuring the output of the counts
//rfce-used to accure the skelton of the page for react.

import React,{useState} from 'react'

function App() {
  const [count,setCount] = useState(0)

  const addCount=()=>{ 
    setCount(count+1);
    console.log(count);
  }
  return (
    <div style={{ background: 'lightblue' }}>
      <button onClick={addCount}>Add</button>
      <Counter title='Counter with title' qwe='qwe' abc={count}/>
    </div>
  );
}

export default App;

function Counter(props) {   //We can also add props and can also add them in starting by Destructuring
  const {title, qwe}=props  // Also we can give this variables inside the function parameter area Counter({title,qwe}) insteadof props
  return (
      <div>
          <h1>Counter added: {props.abc}</h1> 
          <h1>{title}: {props.abc} {qwe}</h1>
      </div>
  )
}