import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch=useDispatch()
  const counter=useSelector(state=>state.counter)

  const incremenHandler=()=>{
    dispatch({type:'increment'})
  }
  const decremenHandler=()=>{
    dispatch({type:'decrement'})
  }
  const incremenHandlerBy5=()=>{
    dispatch({type:'incrementBy5'})
  }
  const decremenHandlerBy5=()=>{
    dispatch({type:'decrementBy5'})
  }
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incremenHandler}>increment</button>
        <button onClick={decremenHandler}>decriment</button>

      </div>
      <div>
      <button onClick={incremenHandlerBy5}>incrementBy5</button>
        <button onClick={decremenHandlerBy5}>decrimentBy5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
