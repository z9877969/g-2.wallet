import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import LabelInput from "../_share/LabelInput/LabelInput";
import Button from "../_share/Button/Button";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required email"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

const AuthForm = ({ btnTitle, linkTitle, authPath, handleSubmit }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <LabelInput
        title="Email"
        name="email"
        value={formik.values.email}
        placeholder="Input email..."
        cbOnChange={formik.handleChange}
      />
      {formik.touched.email && formik.errors.email && (
        <p>{formik.errors.email}</p>
      )}
      <LabelInput
        title="Password"
        type={"password"}
        name="password"
        value={formik.values.password}
        placeholder="Input password..."
        cbOnChange={formik.handleChange}
      />
      {formik.touched.password && formik.errors.password && (
        <p>{formik.errors.password}</p>
      )}
      <Button type="submit" title={btnTitle} />
      <Link to={authPath}>{linkTitle}</Link>
    </form>
  );
};

export default AuthForm;
