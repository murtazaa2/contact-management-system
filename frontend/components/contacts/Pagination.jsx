// function Pagination() {

//   return (

//     <div className="mt-3">

//       <button className="btn btn-outline-primary me-2">
//         Previous
//       </button>

//       <button className="btn btn-outline-primary">
//         Next
//       </button>

//     </div>

//   );

// }

// export default Pagination;


function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {

  return (

    <div className="mt-4">

      <button
        className="btn btn-outline-primary me-2"
        disabled={currentPage === 1}
        onClick={() =>
          onPageChange(currentPage - 1)
        }
      >
        Previous
      </button>

      <span className="me-2">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className="btn btn-outline-primary"
        disabled={currentPage === totalPages}
        onClick={() =>
          onPageChange(currentPage + 1)
        }
      >
        Next
      </button>

    </div>

  );

}

export default Pagination;