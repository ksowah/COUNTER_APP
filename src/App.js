import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter value = {5}/>
      <Counter value = {15}/>
      <Counter value = {30}/>
    </div>
  );
}

export default App;
