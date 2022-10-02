import { useState } from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import "./rating.css";

const Star = ({ selected, onSelect = (f) => f }) => (
  <FaStar
    className="star"
    color={selected ? "yellow" : "grey"}
    onClick={onSelect}
  />
);
export const Rating = ({ number = 5 }) => {
  const [selected, setSelected] = useState(-1);
  return [...Array(number)].map((n, idx) => (
    <Star
      key={idx}
      onSelect={() => setSelected(idx + 1)}
      selected={idx < selected}
    />
  ));
};

Rating.propTypes = {
  number: PropTypes.number,
};
