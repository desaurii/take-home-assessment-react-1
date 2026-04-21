import styles from "./Main.module.css";
import LoginForm from "../LoginForm/LoginForm";

function Main() {
  return (
    <main className={styles.main}>
      <LoginForm />
    </main>
  );
}
export default Main;
