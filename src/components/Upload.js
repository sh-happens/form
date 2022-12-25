import React from "react";
import { Link } from "react-router-dom";

export const Upload = () => {
  return (
    <div className="bg-[url('/src/assets/rainbow.jpg')] bg-cover w-screen h-screen">
      <section
        className="h-2/3 w-1/4 bg-white/50 m-auto translate-y-[5%] flex 
      flex-col items-center justify-evenly rounded-[20px] shadow-xl min-w-[350px] p-4 min-h-[600px]"
      >
        <h1 className="text-3xl font-bold text-center">Upload your CV</h1>
        <h1 className="text-3xl font-bold text-center">
          by clicking our Upload button you agree to our compiance rules
        </h1>
        <div className="w-full flex w-4/5 min-w-[350px]">
          <Link
            to="/thanks"
            className="bg-sky-200 py-4 border m-auto w-2/5 text-center text-xl font-bold"
          >
            Upload <br /> button
          </Link>
        </div>
      </section>
    </div>
  );
};
