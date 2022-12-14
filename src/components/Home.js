import React from "react";
import { useContext } from "react";
import Hero from "./herosection/Hero";
import ImageList from "./ImageList";
import { SeilessContext } from "../context/SeilessContext";
import ReactPaginate from "react-paginate";

const Home = () => {
  const { pageCount, handlePageClick, photos, pagesAmount, isLoading } =
    useContext(SeilessContext);

  return (
    <>
      <Hero />

      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {isLoading ? (
            <div class="flex items-center justify-center min-h-screen">
              <div className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
              <p class="ml-2">Loading...</p>
            </div>
          ) : (
            photos.map((photo) => {
              return <ImageList key={photo.id} {...photo} />;
            })
          )}
        </div>
      </div>

      <div className="py-4 flex items-center justify-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next "
          onPageChange={handlePageClick}
          forcePage={pageCount - 1}
          pageRangeDisplayed={5}
          pageCount={pagesAmount}
          previousLabel="previous"
          renderOnZeroPageCount={null}
          className={"flex items-center px-4 py-2 mx-1"}
          pageLinkClassName={
            "px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md hidden md:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-green-400 hover:text-white dark:hover:text-gray-200 "
          }
          nextClassName={
            "flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-green-400 hover:text-white dark:hover:text-gray-200"
          }
          previousClassName={
            "flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-green-400 hover:text-white dark:hover:text-gray-200"
          }
          activeLinkClassName={
            "flex items-center px-4 py-2 mx-1 text-green-700 transition-colors duration-300 transform bg-white hidden rounded-md hidden md:flex hidden dark:bg-green-800 dark:text-green-200 hover:bg-blue-600 dark:hover:bg-green-400 hover:text-white dark:hover:text-green-200"
          }
        />
      </div>
    </>
  );
};

export default Home;
