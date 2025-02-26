import React from "react";

function Paging({ page, setPage }) {
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <div className="join">
      <button className="join-item btn" onClick={handlePrev} disabled={page === 1}>
        «
      </button>
      <button className="join-item btn">Page {page}</button>
      <button className="join-item btn" onClick={handleNext}>
        »
      </button>
    </div>
  );
}

export default Paging;
