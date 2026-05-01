import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

function Header() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const { isAuth } = useContext(AuthContext);
  const handleLogout = () => {
  logout();
  navigate("/");
};

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>React Assessment</h1>
      <p className={styles.description}>
        Добро пожаловать! Начни выполнять задания из README.md
      </p>

      {isAuth && 
      <button className={styles.logoutButton} onClick={handleLogout}>
        Выйти
      </button>}
    </header>
  );
}
export default Header;
