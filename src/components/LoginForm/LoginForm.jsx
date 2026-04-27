import styles from "./LoginForm.module.css";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const savedLogin = localStorage.getItem("login") || "";
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: savedLogin,
      password: "",
    },
  });

  const onSubmit = (data) => {
    localStorage.setItem("login", data.login);
    navigate("/users", { replace: true });
  };

  return (
    <section className={styles.loginSection}>
      <h2 className={styles.title}>Форма входа</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label} htmlFor="login">
          Login
        </label>
        <input
          className={styles.input}
          type="text"
          id="login"
          placeholder="Введите логин"
          {...register("login", {
            required: "Логин обязателен",
            minLength: {
              value: 3,
              message: "Минимум 3 символа",
            },
          })}
        />
        {errors.login && <p className={styles.error}>{errors.login.message}</p>}

        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          className={styles.input}
          type="password"
          id="password"
          placeholder="Введите пароль"
          {...register("password", {
            required: "Пароль обязателен",
            minLength: {
              value: 6,
              message: "Минимум 6 символов",
            },
          })}
        />
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}

        <button className={styles.submitButton} type="submit">
          Войти
        </button>
      </form>
    </section>
  );
}
export default LoginForm;
