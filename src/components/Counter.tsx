import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { increment, decrement } from "../store/counterSlice";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => dispatch(decrement())}
        style={{ marginRight: "10px" }}
      >
        -
      </button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default Counter;
