import "./LoginStyle.css";
import { useState } from "react";

function Login() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <div class="form-container">
      <h1>Register Here</h1>
      <form>
        <input placeholder="Username" />
        <input placeholder="Email" />
        <input placeholder="Password" />
        <input placeholder="Confirm password" />
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
}
export default Login;
