import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import "./styles.scss";

export function StarRating({ noOfStars = 10 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleMouseEnter(currentIndex) {
    setHover(currentIndex);
    console.log("enter", currentIndex);
  }

  function handleMouseLeave(currentIndex) {
    setHover(rating);
    console.log("leave: ", currentIndex);
  }

  function handleClick(currentIndex) {
    setRating(currentIndex);
    console.log("click", currentIndex);
  }

  return (
    <div className="star-rating">
      <h1>
        Star Rating: {hover}/{noOfStars}
      </h1>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          ></FaStar>
        );
      })}
    </div>
  );
}
