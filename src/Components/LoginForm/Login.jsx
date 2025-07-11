import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = (data) => {
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (!matchedUser) {
      setError("auth", { message: "Email or password is incorrect" });
      return;
    }

    // Save logged user
    localStorage.setItem("loggedUser", JSON.stringify(matchedUser));

    alert("Login successful!");
    navigate("/productlist");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        {errors.auth && <p className="auth-error">{errors.auth.message}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
