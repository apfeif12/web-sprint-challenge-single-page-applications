import { Route, Switch, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Form from "./Form.js";
import Home from "./Home.js";
import * as Yup from "yup";
import Schema from "../Validation/Schema.js";
import React, { useState } from "react";
import axios from "axios";
import Pizza from "./Pizza.js";

const initialFormValues = {
  name: "",
  size: "",
  sauce: "",
  notes: "",

  pepperoni: false,
  bacon: false,
  mushrooms: false,
  chicken: false,
  greenpepper: false,
  pineapple: false,
};
const initialFormErrors = {
  name: "",
};
const initialPizza = [];

export default function Header() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialFormErrors);
  const [pizza, setPizza] = useState(initialPizza);

  const createNewOrder = (newPizza) => {
    axios
      .post("https://reqres.in/api/users", newPizza)
      .then((res) => {
        setPizza([res.data, ...pizza]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err.res);
      });
  };

  const changes = (name, value) => {
    Yup.reach(Schema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submitForm = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      notes: formValues.notes,
      toppings: ["pepperoni", "bacon", "mushrooms", "chicken", "greenpepper", "pineapple"].filter(
        (toppings) => {
          return formValues[toppings];
        }
      ),
    };
    createNewOrder(newPizza);
  };

  return (
    <div>
      <nav>
        <h1 className="header">Lambda Eats</h1>
        <div className="nav-links">
          <Router>
            <Link to="/">Home</Link>
            <br></br>
            <Link to="/pizza">Build a Pizza</Link>
            <Switch>
              <Route path={"/pizza"}>
                <Form
                  values={formValues}
                  change={changes}
                  errors={errors}
                  submit={submitForm}
                />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>
      </nav>
      <div>
        {pizza.map((user) => {
          return <Pizza details={user} />;
        })}
      </div>
    </div>
  );
}
