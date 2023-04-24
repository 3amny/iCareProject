import { Link } from "react-router-dom";
import { FormRow } from "shared/Input";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "features/User/Auth/userSlice.js";
import Wrapper from "./Wrapper.js";
import { toast } from "react-toastify";
const initialState = {
  password: "",
  email: "",
};

const SigninPage = () => {
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  const { isLoading, user, role } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { password, email } = values;
    if (!email || !password) {
      toast.error("Please fill out the fields");
      return;
    }
    dispatch(
      loginUser({
        email: email,
        password: password,
      })
    );
  };

  useEffect(() => {
    if (role) {
      if (role === "642509196383af1ca69c2e9b") {
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else if (role === "642509136383af1ca69c2e99") {
        setTimeout(() => {
          navigate("/admin");
        }, 2000);
      }
    }
  }, [user, navigate]);
  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <h5>SING IN</h5>
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
        <div className="link-doc">
          <p>Are you a doctor?</p>
          <Link to="/account/signin" className="link-signin">
            Come here
          </Link>
        </div>
      </form>
    </Wrapper>
  );
};

export default SigninPage;
