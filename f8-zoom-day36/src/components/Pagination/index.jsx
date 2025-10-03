import React from "react";
import styles from "./Pagination.module.scss";

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 0) return null;

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.pagination}>
        {/* First */}
        <li
          className={`${styles.pageItem} ${currentPage === 1 ? styles.disabled : ""}`}
          onClick={() => goToPage(1)}
        >
          First
        </li>

        {/* Previous */}
        <li
          className={`${styles.pageItem} ${currentPage === 1 ? styles.disabled : ""}`}
          onClick={() => goToPage(currentPage - 1)}
        >
          Previous
        </li>

        {/* Numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <li
            key={page}
            className={`${styles.pageItem} ${
              page === currentPage ? styles.active : ""
            }`}
            onClick={() => goToPage(page)}
          >
            {page}
          </li>
        ))}

        {/* Next */}
        <li
          className={`${styles.pageItem} ${
            currentPage === totalPages ? styles.disabled : ""
          }`}
          onClick={() => goToPage(currentPage + 1)}
        >
          Next
        </li>

        {/* Last */}
        <li
          className={`${styles.pageItem} ${
            currentPage === totalPages ? styles.disabled : ""
          }`}
          onClick={() => goToPage(totalPages)}
        >
          Last
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
