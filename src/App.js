import "./App.css";
import { useState } from "react";

function App() {
  const savedLogin = localStorage.getItem("login") || "";

  const [login, setLogin] = useState(savedLogin);
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("login", login);
    window.location.reload();
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>React Assessment</h1>
        <p>Добро пожаловать! Начни выполнять задания из README.md</p>
      </header>

      <main className="app-main">
        <section className="login-section">
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
      </main>

      <footer className="app-footer">
        <p>Take-Home Assessment &copy; 2026</p>
      </footer>
    </div>
  );
}

export default App;
