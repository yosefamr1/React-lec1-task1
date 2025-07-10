import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Required Fields
    if (!form.username.trim()) newErrors.username = "User Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.password) newErrors.password = "Password is required";
    if (!form.confirmPassword) newErrors.confirmPassword = "Confirm Password is required";

    // No spaces in username
    if (/\s/.test(form.username)) newErrors.username = "No spaces allowed in User Name";

    // Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (form.email && !emailRegex.test(form.email)) newErrors.email = "Invalid email format";

    // Password strength
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (form.password && !passwordRegex.test(form.password)) {
      newErrors.password = "Password must have at least 1 uppercase letter, 1 number, and 6+ characters";
    }

    // Confirm password
    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Check if email already exists
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.some((u) => u.email === form.email);
    if (exists) {
      setErrors({ email: "Email already registered" });
      return;
    }

    // Save new user
    users.push({
      username: form.username,
      email: form.email,
      password: form.password,
      address: form.address,
    });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!");

    navigate("/login");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="User Name"
          value={form.username}
          onChange={handleChange}
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword}</p>}

        <input
          type="text"
          name="address"
          placeholder="Address (optional)"
          value={form.address}
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
