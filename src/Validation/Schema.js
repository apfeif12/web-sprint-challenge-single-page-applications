import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string()
  .required("Name required")
  .min(2,"must be atleast 2 characters"),
});
