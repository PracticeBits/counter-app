import { decrement, increment } from "../state/counter/counterSlice";
import type { RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>{count}</div>
      {/* increment button */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      &nbsp;&nbsp;
      {/* decrement button */}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
};

export default Counter;
