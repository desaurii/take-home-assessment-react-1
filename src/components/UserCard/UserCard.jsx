import styles from "./UserCard.module.css";
function UserCard({ user }) {
  return (
    <div className={styles.card}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.company.name}</p>
    </div>
  );
}

export default UserCard;
