import React from "react";

export default function Form(props) {
  const { values, change, submit, errors } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    const useValue = type === "checkbox" ? checked : value;
    change(name, useValue);
  };

  return (
    <div>
      <div>
        <h1>Build Your Own Pizza!</h1>
      </div>
      <form onSubmit={onSubmit}>
        <div>
          <h2>Enter Your Name</h2>
          <p>{errors.name}</p>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={onChange}
              value={values.name}
            />
          </label>
          <label>
            <h2>Select Your Size</h2>
            <select name="role">
              <option value="">- Select a size -</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="extra large">Extra Large</option>
            </select>
          </label>
        </div>
        <div>
          <h2>Select Your Sauce</h2>
          <label>
            Tomato Sauce
            <input type="radio" name="radio" value="tomato sauce" />
          </label>
          <br></br>
          <label>
            Garlic
            <input type="radio" name="radio" value="garlic" />
          </label>
          <br></br>
          <label>
            Alfredo
            <input type="radio" name="radio" value="alfredo" />
          </label>
          <br></br>
          <label>
            Cheese Sauce
            <input type="radio" name="radio" value="cheese sauce" />
          </label>
        </div>
        <div>
          <h2>Select Your Toppings</h2>
          <label>
            Pepperoni
            <input type="checkbox" name="pepperoni" />
          </label>
          <br></br>
          <label>
            Bacon
            <input type="checkbox" name="bacon" />
          </label>
          <br></br>
          <label>
            Mushrooms
            <input type="checkbox" name="mushrooms" />
          </label>
          <br></br>
          <label>
            Chicken
            <input type="checkbox" name="chicken" />
          </label>
          <br></br>
          <label>
            Green Pepper
            <input type="checkbox" name="green pepper" />
          </label>
          <br></br>
          <label>
            Pineapple
            <input type="checkbox" name="pineapple" />
          </label>
          <br></br>
        </div>
        <div>
          <h2>Special Instructions</h2>
          <label>
            Anything to Add?
            <input type="text" name="special instructions" value={values.notes}/>
          </label>
        </div>
        <div>
          <button>Submit Order</button>
        </div>
      </form>
    </div>
  );
}
