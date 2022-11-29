import axios from "axios";
import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const { ID } = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  //Single Photo URL
  const singleUrl = `https://api.unsplash.com/photos/${ID}/?client_id=SLh58pFQUcIQ6Dv87f1ztr0-MEfgAXIEGZGqrXn1XeA`;

  //Fetch Single Photo
  const fetchSinglePhoto = useCallback(async () => {
    try {
      const response = await axios.get(singleUrl);
      const data = await response.data;
      setImages([data]);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  }, [singleUrl]);

  useEffect(() => {
    fetchSinglePhoto();
  }, [fetchSinglePhoto]);

  console.log(images);
  return (
    <>
      {loading ? (
        images.map((images) => {
          return (
            <div key={images.id} className="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col">
              <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
                <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
                  <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
                    {images.alt_description}
                  </h2>
                
                  <div className="mb-10 text-center md:mb-16 lg:mb-20">
                    <a
                      href={`${images.links.download}`}
                      className="cursor-pointer inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      Download
                    </a>
                  </div>
                  <div className="container px-5 pt-2 mx-auto flex flex-wrap">
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                      <h2 className="title-font font-medium text-3xl text-gray-900">
                        {images.likes}K
                      </h2>
                      <p className="leading-relaxed">Likes</p>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                      <h2 className="title-font font-medium text-3xl text-gray-900">
                        {images.downloads}K
                      </h2>
                      <p className="leading-relaxed">Downloads</p>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                      <h2 className="title-font font-medium text-3xl text-gray-900">
                        {images.views}K
                      </h2>
                      <p className="leading-relaxed">Views</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                <img
                  className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                  src={images.urls.regular}
                  alt=""
                />
              </div>
            </div>
          );
        })
      ) : (
        <h3>loading...</h3>
      )}
    </>
  );
};

export default SinglePage;
