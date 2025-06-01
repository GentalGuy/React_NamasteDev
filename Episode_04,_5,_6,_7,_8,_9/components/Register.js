import { Link } from "react-router";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { useNavigate } from "react-router";

const Register = () => {
                    const navigate = useNavigate()
  const onSubmit = (values,actions) => {
    console.log( values);
    localStorage.setItem("user",JSON.stringify(values))
    navigate("/login")
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  console.log(formik);
  return (
    <div className="login-page">
      <div
        className="login-container"
        style={{ backgroundColor: "rgb(220, 203, 245)" }}
      >
        <h1>Register</h1>
        <form onSubmit={formik.handleSubmit}>
          {formik.errors.name && formik.touched.name && (
            <p className="error">{formik.errors.name}</p>
          )}
          <input
            type="text"
            className={
              formik.errors.name && formik.touched.name ? "input-error" : ""
            }
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your name"
            id="name"
            name="name"
          ></input>
          <label htmlFor="name">Enter Your Name</label>

          {formik.errors.email && formik.touched.email && (
            <p className="error">{formik.errors.email}</p>
          )}
          <input
            className={
              formik.errors.email && formik.touched.email ? "input-error" : ""
            }
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="email"
            id="email"
            name="email"
            placeholder="abc@gmail.com"
          ></input>
          <label htmlFor="email">Your Email</label>

          <br></br>
          {formik.errors.password && formik.touched.password && (
            <p className="error">{formik.errors.password}</p>
          )}
          <input
            className={
              formik.errors.password && formik.touched.password
                ? "input-error"
                : ""
            }
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
            id="password"
            name="password"
            placeholder="set password"
            onBlur={formik.handleBlur}
          ></input>
          <label htmlFor="password">New Password</label>

          <button disabled={formik.isSubmitting} type="submit" className="login">Register</button>
          <p>
            Have already an account?
            <Link to="/login" className="login-link">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
