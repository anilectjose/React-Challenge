import './App.css';
import Header from './Components/Header';
import ClassComponent from './Components/Class';
function App() {
  const abc = 'hello I\'m Anilect Jose';
  return (
    <div style={{ background: 'lightblue' }}>
      <Header data={abc} />
      <h1 style={{ backgroundColor: 'red', color: 'yellow' }}>Inline CSS</h1>
      <p>Simple P Tag</p>
      <p className='hello'>Hai World this is for external class</p>
      <p className={'hello'}>Hai World this is for external class with looping option</p>
      <ClassComponent detail={abc} />
      <Babu />
    </div>
  );
}

export default App;

function Babu() {
  return (
    <h3> This is internal Function in main page</h3>
  )
}