import React from "react";
import ErrorImage from "../components/assets/moon.jpg"

const Error = () => {
  return (
    <div class="bg-indigo-900 relative overflow-hidden h-screen">
      <img
        src={ErrorImage}
        class="absolute h-full w-full object-cover"
        alt="Error Not Found"
      />
      <div class="inset-0 bg-black opacity-25 absolute"></div>
      <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div class="w-full font-mono flex flex-col items-center relative z-10">
          <h1 class="font-extrabold text-5xl text-center text-white leading-tight mt-4">
            You are alone here
          </h1>
          <p class="font-extrabold text-8xl my-44 text-white animate-bounce">
            404
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
