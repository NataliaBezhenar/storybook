import { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../../stories/Button";

export const Counter = ({ color }) => {
  let [count, setCount] = useState(0);

  const handleOnClick = (evtType) => {
    if (evtType === "ADD") {
      setCount(count + 1);
      return;
    }
    setCount(count - 1);
  };
  return (
    <>
      <span>Counter: {count} </span>
      <Button
        onClick={() => handleOnClick("ADD")}
        backgroundColor="#288609"
        label="+"
      />
      <Button
        onClick={() => handleOnClick()}
        backgroundColor="#288609"
        label="-"
      />
    </>
  );
};

Counter.propTypes = {
  color: PropTypes.string,
};
