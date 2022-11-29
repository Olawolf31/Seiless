import React from "react";
import { useContext } from "react";
import Hero from "./herosection/Hero";
import ImageList from "./ImageList";
import { SeilessContext } from "../context/SeilessContext";
import ReactPaginate from "react-paginate";

const Home = () => {
  const { pageCount, handlePageClick, currentImages } =
    useContext(SeilessContext);
  return (
    <>
      <Hero />

      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {currentImages.map((photo) => {
            return <ImageList key={photo.id} {...photo} />;
          })}
        </div>
      </div>

      <div className="py-4 flex items-center justify-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next "
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="previous"
          renderOnZeroPageCount={null}
          className={"flex items-center px-4 py-2 mx-1"}
          pageClassName={
            "flex items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-green-400 hover:text-white dark:hover:text-gray-200"
          }
          nextClassName={
            "flex items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-green-400 hover:text-white dark:hover:text-gray-200"
          }
          previousClassName={
            "flex items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-green-400 hover:text-white dark:hover:text-gray-200"
          }
          activeClassName={
            "flex items-center hidden px-4 py-2 mx-1 text-blue-700 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-blue-800 dark:text-blue-200 hover:bg-blue-600 dark:hover:bg-green-400 hover:text-white dark:hover:text-gray-200"
          }
        
        />
      </div>
    </>
  );
};

export default Home;
