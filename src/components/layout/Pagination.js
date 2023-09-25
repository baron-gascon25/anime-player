import React, { useState } from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const [page, setPage] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const changePage = (num) => {
    paginate(num);
    setPage(num);
  };

  return (
    <nav aria-label='Page navigation'>
      <ul className='pagination justify-content-center'>
        <li className={page === 1 ? "page-item disabled" : "page-item"}>
          <a
            className='page-link'
            onClick={() => changePage(page - 1)}
            href='#'
            aria-label='Previous'
          >
            <span aria-hidden='true'>&laquo;</span>
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <a
              onClick={() => changePage(number)}
              className='page-link'
              href='#'
            >
              {number}
            </a>
          </li>
        ))}
        <li
          className={
            page === Math.ceil(totalPosts / postsPerPage)
              ? "page-item disabled"
              : "page-item"
          }
        >
          <a
            className='page-link'
            onClick={() => changePage(page + 1)}
            href='#'
            aria-label='Next'
          >
            <span aria-hidden='true'>&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
