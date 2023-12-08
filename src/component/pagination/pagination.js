import React, { useState } from "react";
import "./pagination.css";

const Pagination = ({ pizzaList }) => {
  const [index, setindex] = useState(0);
  const [state, setState] = useState(pizzaList);
  console.log(pizzaList);

  function handleNext() {
    let length = pizzaList.length - 1;
    if (index < length) {
      setindex(index + 1);
    }
  }

  function handlePrevious() {
    if (index > 0) {
      setindex(index - 1);
    }
  }

  let values = state[index];

  return (
    <div className="Pagination">
      <div className="button-number-section">
        <button className={index >= 0 ? "active" : ""}>1</button>
        <button className={index >= 1 ? "active" : ""}>2</button>
        <button className={index >= 2 ? "active" : ""}>3</button>
        <button className={index >= 3 ? "active" : ""}>4</button>
        <button className={index >= 4 ? "active" : ""}>5</button>
        <button className={index >= 5 ? "active" : ""}>6</button>
      </div>
      <div className="product-section">
        <div className={values.soldOut ? "img" : "image-section"}>
          <img src={values.imgURL} alt={values.name} />
        </div>
        <div className="content-section">
          <div
            className={values.soldOut ? "product-name-true" : "Pname-section"}
          >
            <h3>
              Product Name: <p>{values.name}</p>
            </h3>
          </div>
          <div
            className={
              values.soldOut
                ? "product-ingredients-true"
                : "pingredients-section"
            }
          >
            <p>Ingredients: {values.ingredients}</p>
          </div>
          <div
            className={
              values.soldOut ? "product-price-true " : "pprice-section"
            }
          >
            <h3>
              {values.soldOut ? "" : "Product Price:"}
              <p>{values.soldOut ? "Sold Out" : values.price}</p>
            </h3>
          </div>
        </div>
      </div>
      <div className="button-prev-Nxt-section">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Pagination;
