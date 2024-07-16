import React from "react";

const Car = ({ car }) => {
  return (
    <div>
      <h3>Car:</h3>
      <p>
        {car.make} {car.model} ({car.year})
      </p>
    </div>
  );
};

export default Car;
