import React from "react";
import SearchForm from "./SearchForm";
import Heroimage from "../assets/fantasy.jpg";

const Hero = () => {
  return (
    <div class="bg-indigo-900 relative overflow-hidden h-1/2">
      <img
        src={Heroimage}
        class="absolute h-full w-full object-cover"
        alt="Seiless Free Stock Images"
      />
      <div class="inset-0 bg-black opacity-25 absolute"></div>
      <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div class="w-full max-w-4xl px-5 mx-auto rounded-md mt-8 relative z-10">
          <h1 class="font-extrabold text-7xl text-left sm:text-3xl text-white leading-tight mt-4">
            Stunning free images & royalty free stock
          </h1>

          <h4 class="font-extrabold text-7xl text-left sm:text-xl text-white leading-tight mt-2">Seiless and get your desired visuals.</h4>

          <SearchForm />
        </div>
      </div>
    </div>
  );
};

export default Hero;
