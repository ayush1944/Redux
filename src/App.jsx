import React from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { decrement, increment, incrementAsync, incrementByAmount } from "./Store/reducers/CounterSlice";

const App = () => {
  const {value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="m-auto container mt-5 bg-red-100 p-10">
      <h1 className="text-center font-bold text-3xl text-red-900"> Counter
      : {value}
      </h1>
      <div className="text-center flex gap-5 mt-5 items-center justify-center">
        <button className=" rounded border-2 border-red-800 px-2 bg-transparent py-1 font-semibold " onClick={()=>dispatch(increment())} >Increment</button>
        <button className=" rounded border-2 border-red-800 px-2 bg-transparent py-1 font-semibold " onClick={()=>dispatch(decrement())}>Decrement</button>
        <button className=" rounded border-2 border-red-800 px-2 bg-transparent py-1 font-semibold " onClick={()=>dispatch(incrementAsync(2))}> Increment by 2</button>
      </div>
    </div>
  )}

export default App;