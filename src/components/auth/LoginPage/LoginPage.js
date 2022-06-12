import { useState, useContext, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import FormField from "../../common/FormField";
import { login } from "../service";
import AuthContext from "../context";

const style = {
  loginWrapper:
    "items-center text-center rounded border border-[#282b2f] m-4 p-10",
  loginTittle: "flex font-extrabold",
  formContainer: "justify-center",
  placeholderContainer: "px-4 border border-[#151b22] outline-none",
  rememberContainer: "flex items-center py-2",
  rememberText: "pl-2",
  loginButton:
    "flex items-center rounded border border-[#282b2f] font-semibold px-8 py-1",
};

function LoginPage() {
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { handleLogin: onLogin } = useContext(AuthContext);

  useEffect(() => {
    ref.current.focus();
  }, []);

  const { email, password, remember } = credentials;

  const handleChange = (event) => {
    setCredentials((credentials) => ({
      ...credentials,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
  };

  const resetError = () => setError(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      resetError();
      setIsLoading(true);
      await login(credentials);
      setIsLoading(false);
      onLogin();
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return (
    <div className={style.loginWrapper}>
      <h1 className={style.loginTittle}>Log In</h1>
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <FormField
          type="email"
          name="email"
          label="email"
          className={style.placeholderContainer}
          value={email}
          onChange={handleChange}
          ref={ref}
        />
        <FormField
          type="password"
          name="password"
          label="password"
          className={style.placeholderContainer}
          value={password}
          onChange={handleChange}
        />

        <div className={style.rememberContainer}>
          <input
            type="checkbox"
            name="remember"
            checked={remember}
            value="remember"
            onChange={handleChange}
          />
          <label className={style.rememberText}>Remember me</label>
        </div>

        <button
          className={style.loginButton}
          type="submit"
          disabled={!email || !password || isLoading}
        >
          Log In
        </button>
      </form>
      {error && <div onClick={resetError}>{error.message}</div>}
    </div>
  );
}

export default LoginPage;
