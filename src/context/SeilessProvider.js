import React from "react";
import { SeilessContext } from "./SeilessContext";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const SeilessProvider = (props) => {
  const [photos, setPhotos] = useState([]);

  //pagination state
  const [currentImages, setCurrentImages] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [imagesOffset, setImagesOffset] = useState(0);

  //search query state
  const [query, setQuery] = useState("");

  //API URL
  /* const url = "https://api.unsplash.com/photos/?client_id=SLh58pFQUcIQ6Dv87f1ztr0-MEfgAXIEGZGqrXn1XeA"
   */

  //SearchURL
  const searchURL = "https://api.unsplash.com/search/photos";

  //fetch URL
  const fetchURL = useCallback(async () => {
    let newurl;
    const urlPage = `&page=${pageCount}`;
    const urlQuery = `&query=${query}`;
    if (query) {
      newurl = `${searchURL}/?client_id=SLh58pFQUcIQ6Dv87f1ztr0-MEfgAXIEGZGqrXn1XeA${urlPage}${urlQuery}`;
    } else {
      newurl = `https://api.unsplash.com/photos/?client_id=SLh58pFQUcIQ6Dv87f1ztr0-MEfgAXIEGZGqrXn1XeA&per_page=30`;
    }

    try {
      const response = await axios.get(`${newurl}`);
      const data = await response.data;
      setPhotos(() => {
        if (query && pageCount === 1) {
          return data.results;
        } else if (query) {
          return [...data.results];
        } else {
          return [...data];
        }
      });
      /* setPhotos(data); */
    } catch (error) {
      console.log(error);
    }
  }, [pageCount, query]);

  //API sideEffect
  useEffect(() => {
    fetchURL();
  }, [fetchURL]);

  //useEffect hook to structure the number of images we request per page:
  useEffect(() => {
    const endOffset = imagesOffset + 8;
    setCurrentImages(photos.slice(imagesOffset, endOffset));
    setPageCount(Math.ceil(photos.length / 8));
  }, [photos, imagesOffset]);

  //split the data into a specific number per page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 8) % photos.length;
    setImagesOffset(newOffset);
  };

  console.log(photos);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
   console.log(query)
  };

  return (
    <SeilessContext.Provider
      value={{
        photos,
        pageCount,
        handlePageClick,
        currentImages,
        query,
        setQuery,
        handleSubmit,
      }}
    >
      {props.children}
    </SeilessContext.Provider>
  );
};

export default SeilessProvider;
