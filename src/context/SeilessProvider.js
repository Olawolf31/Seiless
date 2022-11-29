import React from 'react'
import {SeilessContext} from "./SeilessContext"
import { useState, useEffect } from 'react'
import axios from "axios"

const SeilessProvider = (props) => {

const [photos, setPhotos] = useState([])

const [currentImages, setCurrentImages] = useState([]);
const [pageCount, setPageCount] = useState(0);
const [imagesOffset, setImagesOffset] = useState(0);


//API URL
const url = "https://api.unsplash.com/photos/?client_id=SLh58pFQUcIQ6Dv87f1ztr0-MEfgAXIEGZGqrXn1XeA"

//fetch URL
const fetchURL = async() => {
  try {
    const response = await axios.get(`${url}&per_page=30`)
    const data = await response.data
    setPhotos(data)
  } catch (error) {
    console.log(error)
  }
}

//API sideEffect
useEffect(() => {
  fetchURL()
}, [])

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


console.log(photos)

  return (
    <SeilessContext.Provider value={{photos, pageCount, handlePageClick, currentImages}}>
        {props.children}
    </SeilessContext.Provider>
  )
}

export default SeilessProvider