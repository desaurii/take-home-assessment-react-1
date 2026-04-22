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
      <h2 className={styles.title}>Форма входа</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="login">
          Login
        </label>
        <input
          className={styles.input}
          type="text"
          required
          id="login"
          name="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Введите логин"
        />
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          className={styles.input}
          type="password"
          required
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Введите пароль"
        />
        <button className={styles.submitButton} type="submit">
          Войти
        </button>
      </form>
    </section>
  );
}
export default LoginForm;
