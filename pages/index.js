import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/index";

export default function Home() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Hello world, I am about to create a counter with redux</h2>
      <div>
        <button onClick={() => dispatch(increment(5))}>Increment</button>
        <h2>Count: {count} </h2>
        <button onClick={() => dispatch(decrement(5))}>Decrement</button>
      </div>
    </div>
  );
}
