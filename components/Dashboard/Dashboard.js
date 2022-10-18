import React from "react";
import ProductCard from "../Library/ProductCard/ProductCard";
import Header from "../Library/Header/Header";
import ReactPaginate from "react-paginate";

const Dashboard = (props) => {
  const handlePageClick = (event) => {
    console.log(event.selected);
    // const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    // setItemOffset(newOffset);
  };

  return (
    <div>
      <Header />
      <ProductCard />

      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={props.pagination.pageCount}
        onPageChange={handlePageClick}
        // breakClassName={"break-me"}
        // containerClassName={"pagination"}
        // subContainerClassName={"pages pagination"}
        // activeClassName={"active"}
      />
    </div>
  );
};

export default Dashboard;
