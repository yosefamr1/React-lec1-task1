import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // دي الداتا المتسجلة مسبقًا من صفحة Register أو تقدر تسجلها هنا مؤقت
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!matchedUser) {
      alert("Wrong email or password!");
      return;
    }

    // لو صح → خزّنه كـ logged in user
    localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
    alert("Login successful!");

    // روح على صفحة المنتجات
    navigate("/productlist");
  };

  return (
    <form onSubmit={handleLogin} style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}
