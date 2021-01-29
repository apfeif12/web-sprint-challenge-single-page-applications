import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string()
    .required("Name required")
    .min(2, "must be atleast 2 characters"),

  sauce: Yup.string().oneOf(
    ["tomatosauce", "garlic", "alfredo", "cheesesauce"],
    "Sauce required"
  ),
  size: Yup.string().oneOf(
    ["small", "medium", "large", "extralarge"],
    "Size required"
  ),
  pepperoni: Yup.boolean(),
  bacon: Yup.boolean(),
  mushrooms: Yup.boolean(),
  chicken: Yup.boolean(),
  greenpepper: Yup.boolean(),
  pineapple: Yup.boolean(),
  notes: Yup.string(),
});
