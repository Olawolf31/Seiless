/* import React from "react";
import { SeilessContext } from "./SeilessContext";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const IMAGES_PER_PAGE = 9;

const SeilessProvider = (props) => {
  const [photos, setPhotos] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [pagesAmount, setPagesAmount] = useState(0);
  const [searchQuery, setSearchQuery] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  //SearchURL
  const searchURL = "https://api.unsplash.com/search/photos";

  //fetch URL
  const fetchURL = useCallback(async (pageNumber, query) => {
    let newurl;

    const paramsObjects = {
      per_page: IMAGES_PER_PAGE,
      page: pageNumber,
      client_id: "SLh58pFQUcIQ6Dv87f1ztr0-MEfgAXIEGZGqrXn1XeA",
      query: query,
    };

    const queryString = Object.keys(paramsObjects)
      .filter((key) => Boolean(paramsObjects[key]))
      .map((key) => `${key}=${paramsObjects[key]}`)
      .join("&");

    if (query) {
      newurl = `${searchURL}/?${queryString}`;
    } else {
      newurl = `https://api.unsplash.com/photos/?${queryString}`;
    }

    try {
      setIsLoading(true);
      const response = await axios.get(`${newurl}`);

      const totalAmount = response.headers["x-total"];
      const amountOfPages = Math.ceil(totalAmount / IMAGES_PER_PAGE);

      const data = await response.data;

      setPagesAmount(amountOfPages);

      setPhotos(query ? data.results : data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  //API sideEffect
  useEffect(() => {
    console.log(pageCount, searchQuery);
    fetchURL(pageCount, searchQuery);
  }, [fetchURL, pageCount, searchQuery]);

  //split the data into a specific number per page.
  const handlePageClick = (event) => {
    const pageNumber = event.selected + 1;

    setPageCount(pageNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const query = e.target.query.value;

    setPageCount(1);
    setPagesAmount(0);
    setSearchQuery(query);
  };

  return (
    <SeilessContext.Provider
      value={{
        photos,
        pageCount,
        pagesAmount,
        handlePageClick,
        handleSubmit,
        isLoading,
      }}
    >
      {props.children}
    </SeilessContext.Provider>
  );
};

export default SeilessProvider; */