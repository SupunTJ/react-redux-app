import React from "react";
import { useDispatch } from "react-redux";
// import { resetCounter } from "../../redux/slice/counterSlice";
import { resetDestination } from "../../redux/slice/destinationSlice";
import { resetReduxApp } from "../../redux/action/actions";

function ResetApp() {
  const dispatch = useDispatch();
  const resetCounterAndDestination = () => {
    dispatch(resetReduxApp());
    // dispatch(resetCounter());
  };
  return (
    <div className="text-center">
      <button
        className="btn btn-warning"
        onClick={() => dispatch(resetReduxApp())}
      >
        Reset App
      </button>
    </div>
  );
}

export default ResetApp;
