import { useEffect, useState } from "react";
import styles from "./Product.module.scss";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [contentPopup, setContentPopup] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setProducts(data); 
          setLoading(false); 
        }, 2000);
      });
  }, []);

  const handleClickRow = (content) => {
    setContentPopup(content);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(!showPopup);
    setContentPopup("");
  };

  return (
    <div className={styles["wrapper-product"]}>
      <div>
       
        <div className={styles["product-content"]}>
          {!loading && (
            <table
              border="1"
              width="100%"
              cellPadding="10"
              style={{ borderCollapse: "collapse", textAlign: "center" }}
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Body</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title?.slice(0, 10)}</td>
                    <td>
                      <p className={styles["text-table-body"]}>
                        {item.body?.slice(0, 100)}
                      </p>
                    </td>
                    <td>
                      <button
                        className={styles["button"]}
                        onClick={() => handleClickRow(item.body)}
                      >
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {loading && (
        <div className={styles["loading-overlay"]}>
          <div className={styles["loader"]}></div>
        </div>
      )}

      {showPopup && (
        <div
          className={styles["overlay-popup"]}
          onClick={() => handleClosePopup()}
        >
          <div
            className={styles["popup-content"]}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{marginBottom: '16px', fontWeight: 600 }}>Detail body:</div> {contentPopup}
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
