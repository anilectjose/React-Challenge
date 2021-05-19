
function App() {
  let count = 0;
  const addCount=()=>{ //Arrow function(Used instead of normal func)- assigning to a variable
    count=count+1;
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
