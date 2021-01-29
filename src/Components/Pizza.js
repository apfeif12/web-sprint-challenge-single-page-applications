import React from "react";

export default function Pizza(props) {
  const { details } = props;
  return (
    console.log(details.toppings),
    <div>
      <h1>{details.name}</h1>
      <h1>{details.size}</h1>
      <h1>{details.sauce}</h1>
      <h1>{details.notes}</h1>

      {!!details.toppings && !!details.toppings.length && (
        <div className="pizza-toppings-list">
          <h4>Toppings:</h4>
          <ul>
            {details.toppings.map((topping, idx) => (
              <li key={idx}>{topping}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
