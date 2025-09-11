import { useEffect, useState } from "react";
import styles from "./Comment.module.scss";

function Comment() {
  const [comment, setComment] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((res) => res.json())
      .then((comment) => setComment(comment));
  }, []);

  const handleChangeName = (value) => {
    setName(value);
  };
  const handleChangeBody = (value) => {
    setBody(value);
  };
  const handleChangeEmail = (value) => {
    setEmail(value);
  };
  const handlePostComment = () => {
    setComment((prevState) => {
      const newComment = [
        {
          postId: 6,
          id: 6,
          name: name,
          email: email,
          body: body,
          time: "Today a minute ago",
        },
        ...prevState,
      ];
      return newComment;
    });
    setName("");
    setEmail("");
    setBody("");
  };

  return (
    <div className="wrapper-middle">
      <div className={styles["wrapper-post"]}>
        <div className={`${styles["post-item"]} ${styles["main-post"]}`}>
          <div className={styles["wrapper-user-infor"]}>
            <div className={styles["user-avatar"]}>
              <img
                src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="aa"
              />
            </div>
            <div className={styles["user-name"]}>Dariel Soura</div>
            <div className={styles["user-email"]}>DarielSoura@gmail.com</div>
          </div>

          <div className={styles["post-content"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            accusamus vero tempore obcaecati, unde, ea qui impedit laborum nam,
            molestiae vel inventore alias sint fugit? Atque quisquam iste omnis
            libero.
          </div>
          <div className={styles["post-time"]}>Today 09:10PM</div>
        </div>

        <div className={`${styles["post-item"]} ${styles["form-input"]}`}>
          <p>Enter comment</p>
          <div className={styles["wrapper-user-infor"]}>
            <input
              placeholder="Enter name"
              className={styles["input-comment"]}
              value={name}
              onChange={(e) => handleChangeName(e.target.value)}
            />
            <input
              placeholder="Enter email"
              className={styles["input-comment"]}
              value={email}
              onChange={(e) => handleChangeEmail(e.target.value)}
            />
          </div>
          <textarea
            placeholder="Enter body"
            className={styles["input-comment"]}
            value={body}
            onChange={(e) => handleChangeBody(e.target.value)}
          />
          <div className={styles["wrapper-button"]}>
            <button onClick={() => handlePostComment()}>Post</button>
          </div>
        </div>

        {comment &&
          comment.map((item, index) => (
            <div
              key={index}
              className={`${styles["post-item"]} ${styles["child-comment"]}`}
            >
              <span
                className={`material-icons ${styles["icon-child"]}`}
              >
                subdirectory_arrow_right
              </span>
              <div className={styles["wrapper-user-infor"]}>
                <div className={styles["user-avatar"]}>
                  <img
                    src={`https://ui-avatars.com/api/?name=${item.name}&background=random`}
                    alt={item.name}
                  />
                </div>
                <div className={styles["user-name"]}>{item.name}</div>
                <div className={styles["user-email"]}>{item.email}</div>
              </div>

              <div className={styles["post-content"]}>{item.body}</div>
              <div className={styles["post-time"]}>
                {item.time || "Today 09:10PM"}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Comment;
