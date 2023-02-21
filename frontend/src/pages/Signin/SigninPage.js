import { Link } from "react-router-dom";
import { FormRow } from "../../shared/ui/Input";
import { Alert } from "../../shared/ui/Alert";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/appContext";
import Wrapper from "./Wrapper.js";

const initialState = {
  firstName: "",
  lastName: "",
  password: "",
  email: "",
  phone: "",
  isMember: true,
};

 const SigninPage = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const { user, isLoading, showAlert, displayAlert, loginUser, role } =
    useAppContext();
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, password, email, phone } = values;
    if (!email || !password) {
      displayAlert();
      return;
    }
    const currentUser = { firstName, lastName, password, email, phone };
    loginUser(currentUser);
  };

  useEffect(() => {
    if (role) {
      if (role === "User") {
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else if (role === "Admin") {
        setTimeout(() => {
          navigate("/admin/dashboard");
        }, 2000);
      }
    }
  }, [user, navigate]);
  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <h5>SING IN</h5>
        {showAlert && <Alert />}
        <FormRow
          type="email"
          name="email"
          labelText="Email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          labelText="Password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          Submit
        </button>
        <div className="link">
          <p>Not a member yet?</p>
          <Link to="/account/signup" className="link-signup">
            Sing up
          </Link>
        </div>
      </form>
    </Wrapper>
  );
};


export default SigninPage