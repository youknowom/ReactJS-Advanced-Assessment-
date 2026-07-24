import React from "react";
import { increment, decrement, reset } from "../store/counterSlice";

import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <h3 className="text-2xl text-yellow-300">Count : {count}</h3>
      <button
        className="h-10 w-15 bg-green-700 rounded-2xl"
        onClick={() => dispatch(increment())}
      >
        Increase
      </button>
      <button
        className="h-10 w-15 bg-green-700 rounded-2xl"
        onClick={() => dispatch(decrement())}
      >
        Decrease
      </button>
      <button
        className="h-10 w-15 bg-green-700 rounded-2xl"
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
