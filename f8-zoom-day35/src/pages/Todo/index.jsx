import { useState } from "react";
import styles from "./Todo.module.scss";

function Todo() {
  const [job, setJob] = useState([]);
  const [task, setTask] = useState("");
  const [totalTask, setTotalTask] = useState(0);

  const handleAddTask = () => {
    setJob((prevState) => {
      const newJobs = [
        ...prevState,
        {
          taskName: task,
          isDone: false,
        },
      ];
      return newJobs;
    });
    setTask("");
  };

  const handleDeleteTask = (taskID) => {
    setJob((prevState) => prevState.filter((_, index) => index !== taskID));
  };

  const handleDoneTask = (taskID) => {
    setJob((prevState) => {
      const newJobs = prevState.map((item, index) => {
        if (index === taskID) {
          return {
            ...item,
            isDone: true,
          };
        }
        return item;
      });
      return newJobs;
    });

    setTotalTask();
  };

  return (
    <div className={`wrapper-app ${styles["todo"]}`}>
      <div className={styles["wrapper-card"]}>
        <div className={styles["wrapper-card-left"]}>
          <p className={styles["card-text"]}>Todo Done</p>
          <span className={styles["card-desc"]}>keep it up</span>
          <div className={styles["wrapper-detail-task"]}></div>
        </div>
        <div className={styles["wrapper-card-right"]}>
          <div className={styles["status-todo"]}>
            {job.reduce((count, job) => (job.isDone ? count + 1 : count), 0)}/
            {job.length}
          </div>
        </div>
      </div>

      <div className={styles["wrapper-todolist"]}>
        <div className={styles["wrapper-input"]}>
          <input
            className={styles["input-add"]}
            placeholder="write your next task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <div className={styles["btn-add"]} onClick={handleAddTask}>
            <span className="material-icons">add</span>
          </div>
        </div>

        <div className={styles["wrapper-tasks"]}>
          {job.length === 0 && (
            <div className={styles["no-result"]}>
              <div>
                <span className="material-icons">assignment_late</span>
              </div>
              <div className={styles["task-item-left"]}>
                You don't have any tasks, add a new one
              </div>
            </div>
          )}

          {job.length > 0 &&
            job.map((item, index) => (
              <div className={styles["task-item"]} key={index}>
                <div
                  className={
                    item.isDone
                      ? `${styles["task-item-left"]} ${styles["done"]}`
                      : styles["task-item-left"]
                  }
                >
                  <div
                    className={styles["task-item-check"]}
                    onClick={() => handleDoneTask(index)}
                  ></div>
                  <span className={styles["task-item-name"]}>
                    {item.taskName}
                  </span>
                </div>
                <div
                  className={styles["task-item-delete"]}
                  onClick={() => handleDeleteTask(index)}
                >
                  <span className="material-icons">delete</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
