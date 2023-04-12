import React from "react";

const CarInput = () => {
  return (
    <div>
      <input type="text" aria-label="make" />;
      <input type="text" aria-label="model" />;
      <input type="text" aria-label="color" />;
      <input type="text" aria-label="car-url" />;
    </div>
  );
};

export default CarInput;
