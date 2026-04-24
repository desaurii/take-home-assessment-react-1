import styles from "./Users.module.css";
import UserCard from "../../components/UserCard/UserCard";
import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setIsLoading(true);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!res.ok) throw new Error("Ошибка запроса");

      const data = await res.json();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className={styles.usersList}>
      {isLoading && (
        <div className={styles.center}>
          <p className={styles.loading}>Loading...</p>
        </div>
      )}

      {error && (
        <div className={styles.center}>
          <p className={styles.error}>{error}</p>
        </div>
      )}

      {!isLoading &&
        !error &&
        users.map((user) => <UserCard key={user.id} user={user} />)}
    </div>
  );
}
export default Users;
