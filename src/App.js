import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter } from './services/actions/counterAction';

function App() {
  const dispatch = useDispatch()
  const handleIncrement = () => {
    dispatch(incrementCounter())
  }

  const count = useSelector(state => state.counter);
  // console.log(count)
  return (
    <div className="App">
      khjhhj
      <h3>count: {count}</h3>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default App;
