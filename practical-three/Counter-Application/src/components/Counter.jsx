import { increment, decrement, reset } from "../store/counterSlice";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-80 rounded-3xl bg-slate-900 p-8 text-center shadow-xl">
        <h3 className="text-4xl font-bold text-emerald-400">Count: {count}</h3>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            className="rounded-xl bg-emerald-500 px-4 py-3 font-semibold text-slate-950 "
            onClick={() => dispatch(increment())}
          >
            Increase
          </button>

          <button
            className="rounded-xl bg-amber-500 px-4 py-3 font-semibold text-slate-950"
            onClick={() => dispatch(decrement())}
          >
            Decrease
          </button>

          <button
            className="rounded-xl bg-rose-500 px-4 py-3 font-semibold text-slate-950"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
