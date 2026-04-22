import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>React Assessment</h1>
      <p className={styles.description}>
        Добро пожаловать! Начни выполнять задания из README.md
      </p>
    </header>
  );
}
export default Header;
