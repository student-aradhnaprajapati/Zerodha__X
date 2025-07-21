import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function SignUp() {
  const [form, setForm] = useState({ email: "", username: "", password: "" });
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await axios.post("http://localhost:3002/api/auth/Login", form);
      login(res.data.token, { email: form.email, username: form.username });
      alert("Registration successful!");
      
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Register</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          style={styles.input}
        />
        {error && <div style={styles.error}>{error}</div>}
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 400,
    margin: "2rem auto",
    padding: 20,
    border: "1px solid #ccc",
    borderRadius: 8,
    backgroundColor: "#fafafa",
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    borderRadius: 4,
    border: "1px solid #ccc",
  },
  button: {
    padding: 10,
    fontSize: 18,
    backgroundColor: "#2d89ef",
    color: "white",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
  },
  error: {
    marginBottom: 10,
    color: "red",
    fontWeight: "bold",
  },
};
