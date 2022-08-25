import { useDispatch, useSelector } from "react-redux";
import {decremented, incremented, reset } from '../../redux/counterSlice';
import "../Layout/Layout.scss"
interface counterProps {
  isAsync?:boolean;
} 
const Counter = (props:counterProps) => {
  const counter = useSelector((state:any)=>state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="my-2">
      <h1>Counter App  {props?.isAsync && "(Async Mode)" }</h1>
        <h4>{counter+''}</h4>
        <div className=''>
          <button 
          onClick={()=>props?.isAsync?setTimeout(()=>{dispatch(decremented())},1000):dispatch(decremented())}   className='minBtn '>
            Min -
          </button>
          <button 
          onClick={()=>props?.isAsync?setTimeout(()=>{dispatch(reset())},1000):dispatch(reset())}  
          className='resetBtn '>
            Reset
          </button>
          <button
          onClick={()=>props?.isAsync?setTimeout(()=>{dispatch(incremented())},1000):dispatch(incremented())}  
             className='maxBtn '>
            Max +
          </button>
         </div>
    </div>
  )
}

export default Counter