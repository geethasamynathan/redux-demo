import React from "react";
import { connect } from "react-redux";

const Counter = ({ count, increment, decrement }) => {
  return (
    <>
      <h1>Counter :{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

const maStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCERMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  };
};

export default connect(maStateToProps, mapDispatchtoProps)(Counter);
