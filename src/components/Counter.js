import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import {INCREMENT,counterAction} from '../Store/index'
const Counter = () => {
  const dispatch=useDispatch()
  const counter=useSelector(state=>state.counter)
const show=useSelector(state=>state.showCounter)
 
const incremenHandler=()=>{
    dispatch(counterAction.increment())
  }
  const decremenHandler=()=>{
    dispatch(counterAction.decrement())
  }
  const incremenHandlerBy=()=>{
    dispatch(counterAction.incrementBy(5) )
  }
  const decremenHandlerBy=()=>{
    dispatch(counterAction.decrementBy(5))
  }
  const toggleCounterHandler = () => {
    dispatch({type:'toggel'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incremenHandler}>increment</button>
        <button onClick={decremenHandler}>decriment</button>

      </div>
      <div>
      <button onClick={incremenHandlerBy}>incrementBy5</button>
        <button onClick={decremenHandlerBy}>decrimentBy5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
