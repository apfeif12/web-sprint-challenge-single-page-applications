import React from "react";


export default function Form(props) {
  const { values, change, submit, errors } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    change(name, type === 'checkbox' ? checked : value);
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
            <select name="size" value={values.size} onChange={onChange}>
              <option value="">- Select a size -</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="extralarge">Extra Large</option>
            </select>
          </label>
        </div>
        <div>
          <h2>Select Your Sauce</h2>
          <label>
            Tomato Sauce
            <input type="radio" name="sauce" value="tomato-sauce" checked={values.sauce === 'tomato-sauce'} onChange={onChange}/>
          </label>
          <br></br>
          <label>
            Garlic
            <input type="radio" name="sauce" value="garlic" checked={values.sauce === 'garlic'} onChange={onChange}/>
          </label>
          <br></br>
          <label>
            Alfredo
            <input type="radio" name="sauce" value="alfredo" checked={values.sauce === 'alfredo'} onChange={onChange}/>
          </label>
          <br></br>
          <label>
            Cheese Sauce
            <input type="radio" name="sauce" value="cheesesauce" checked={values.sauce === 'cheesesauce'} onChange={onChange}/>
          </label>
        </div>
        <div>
          <h2>Select Your Toppings</h2>
          <label>
            Pepperoni
            <input type="checkbox" name="pepperoni" checked={values.pepperoni} onChange={ onChange }/>
          </label>
          <br></br>
          <label>
            Bacon
            <input type="checkbox" name="bacon" checked={values.bacon} onChange={ onChange }/>
          </label>
          <br></br>
          <label>
            Mushrooms
            <input type="checkbox" name="mushrooms" checked={values.mushrooms} onChange={ onChange }/>
          </label>
          <br></br>
          <label>
            Chicken
            <input type="checkbox" name="chicken" checked={values.chicken} onChange={ onChange }/>
          </label>
          <br></br>
          <label>
            GreenPepper
            <input type="checkbox" name="greenpepper" checked={values.greenpepper} onChange={ onChange }/>
          </label>
          <br></br>
          <label>
            Pineapple
            <input type="checkbox" name="pineapple" checked={ values.pineapple} onChange={ onChange }/>
          </label>
          <br></br>
        </div>
        <div>
          <h2>Special Instructions</h2>
          <label>
            Anything to Add?
            <input type="text" name="notes" onChange={ onChange } />
          </label>
        </div>
        <div>
          <button>Submit Order</button>
        </div>
      </form>
    </div>
  );
}
