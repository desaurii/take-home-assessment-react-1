import { useState } from "react";
import styles from "./LoginForm.module.css";

function LoginForm() {
  const savedLogin = localStorage.getItem("login") || "";

  const [login, setLogin] = useState(savedLogin);
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("login", login);
    window.location.reload();
  };

  return (
    <section className={styles.loginSection}>
      <h2>Форма входа</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="login">Login</label>
        <input
          type="text"
          required
          id="login"
          name="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Введите логин"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          required
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Введите пароль"
        />
        <button type="submit">Войти</button>
      </form>
    </section>
  );
}
export default LoginForm;
