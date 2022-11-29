import React from "react";

const ImageList = (props) => {
  return (
    <div className="lg:w-1/3 sm:w-full p-4">
      <div className="flex relative">
        <img
          alt="gallery"
          className="absolute inset-0 w-full h-96 object-cover object-center"
          src={props.urls.regular}
        />
        <div className="px-8 py-10 relative z-10 w-full h-96 border-4 border-gray-200 bg-black opacity-0 hover:opacity-80">
          <div className="flex items-center">
            <a href="/" aria-label="Author" title="Author" className="mr-3">
              <img
                src={props.user.profile_image.large}
                alt="avatar"
                className="object-cover w-10 h-10 rounded-full shadow-sm"
              />
            </a>
            <div>
              <span className="font-semibold text-white transition-colors duration-200 hover:text-deep-purple-accent-400">
                {props.user.name}
              </span>
              <p className="text-sm font-medium leading-4 text-white">Author</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageList;
