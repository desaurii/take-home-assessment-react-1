import styles from "./LoginForm.module.css";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginForm() {
  const savedLogin = localStorage.getItem("username") || "";
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: savedLogin,
      password: "",
    },
  });

  const [apiError, setApiError] = useState("");

  const onSubmit = async (data) => {
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          username: data.username,
          password: data.password,
          expiresInMins: 30,
        }),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message || "Request failed");

      localStorage.setItem("token", result.accessToken);

      navigate("/users", { replace: true });
    } catch (err) {
      setApiError(err.message);
      console.log(err.message);
    }
  };

  return (
    <section className={styles.loginSection}>
      <h2 className={styles.title}>Форма входа</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label} htmlFor="username">
          Login
        </label>
        <input
          className={styles.input}
          type="text"
          id="username"
          placeholder="Введите логин"
          {...register("username", {
            required: "Логин обязателен",
            minLength: {
              value: 3,
              message: "Минимум 3 символа",
            },
          })}
        />
        {errors.username && (
          <p className={styles.error}>{errors.username.message}</p>
        )}

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
        {apiError && <p className={styles.apiError}>{apiError}</p>}

        <button className={styles.submitButton} type="submit">
          Войти
        </button>
      </form>
    </section>
  );
}
export default LoginForm;
