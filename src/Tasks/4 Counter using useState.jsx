//Using of useState and by importing the library also can call 'Hook'

import {useState} from 'react'

function App() {
  const [count,setCount] = useState(0) //Taking the values from useState and inserting to 2 var by array. count=0 

//Showing an example on division of a array to different pieces
  const arr= [1,2,3,4] 
  const [j,k,l,m] = arr
  console.log(m,l,k,j);

  const addCount=()=>{ //Arrow function(Used instead of normal func)- assigning to a variable
    setCount(count+1);
    console.log(count);
  }
  return (
    <div style={{ background: 'lightblue' }}>
      <button onClick={addCount}>Add</button>
      <h1>Counter: {count}</h1>
    </div>
  );
}

export default App;
