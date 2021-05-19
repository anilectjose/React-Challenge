
function App() {
  let count = 0;
  function addCount(){
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
