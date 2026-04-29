import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>React Assessment</h1>
      <p className={styles.description}>
        Добро пожаловать! Начни выполнять задания из README.md
      </p>
      <button className={styles.logoutButton} onClick={logout}>
        Выйти
      </button>
    </header>
  );
}
export default Header;
