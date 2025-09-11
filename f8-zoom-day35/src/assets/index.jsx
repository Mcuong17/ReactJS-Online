import { useEffect, useState } from "react";
import styles from "./Profile.module.scss";

function Profile() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((user) =>
        setTimeout(() => {
          setUser(user);
        }, 3000)
      )
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 3000)
      );
  }, []);

  return (
    <div className={`wrapper-app ${styles["profile"]}`}>
      <div className={styles["wrapper-card-header"]}>
        <div className={styles["card-avatar"]}></div>
      </div>

      <div className={styles["wrapper-card-body"]}>
        <div className={styles["card-name"]}>{user.name}</div>
        <div className={styles["wrapper-card-info"]}>
          <div className={styles["card-item"]}>
            <div className={styles["lable-type"]}>User Name</div>
            <div className={styles["card-value"]}>{user.username}</div>
          </div>
          <div className={styles["card-item"]}>
            <div className={styles["lable-type"]}>Email</div>
            <div className={styles["card-value"]}>{user.email}</div>
          </div>
          <div className={styles["card-item"]}>
            <div className={styles["lable-type"]}>Phone</div>
            <div className={styles["card-value"]}>{user.phone}</div>
          </div>
          <div className={styles["card-item"]}>
            <div className={styles["lable-type"]}>Website</div>
            <div className={styles["card-value"]}>{user.website}</div>
          </div>
          <div className={styles["card-item"]}>
            <div className={styles["lable-type"]}>Address</div>
            <div className={styles["card-value"]}>
              {user?.address?.suite} - {user?.address?.city}
            </div>
          </div>
        </div>
      </div>

      {loading && (
        <div className={styles["loading-overlay"]}>
          <div className={styles["loader"]}></div>
        </div>
      )}
    </div>
  );
}

export default Profile;
