import React from "react";
import { Link } from "react-router-dom";

export const Money = () => {
  return (
    <div className="bg-[url('/src/assets/rainbow.jpg')] bg-cover w-screen h-screen">
      <section
        className="h-2/3 w-1/4 bg-white/50 m-auto translate-y-[5%] flex 
      flex-col items-center justify-evenly rounded-[20px] shadow-xl min-w-[350px] p-4 min-h-[600px]"
      >
        <h1 className="text-3xl font-bold text-center">
          How much is your pay do you expect from your job?
        </h1>
        <div className="w-full flex w-4/5 min-w-[350px]">
          <Link
            to="/upload"
            className="bg-sky-200 py-4 border m-auto w-2/5 text-center text-xl font-semibold"
          >
            48k <br />
            (junior)
          </Link>
          <Link
            to="/upload"
            className="bg-sky-200 py-4 border m-auto w-2/5 text-center text-xl font-semibold"
          >
            65k <br /> (associate)
          </Link>
        </div>
        <div className="w-full flex w-4/5 min-w-[350px]">
          <Link
            to="/upload"
            className="bg-sky-200 py-4 border m-auto w-2/5 text-center text-xl font-semibold"
          >
            78k <br /> (experienced)
          </Link>
          <Link
            to="/upload"
            className="bg-sky-200 py-4 border m-auto w-2/5 text-center text-xl font-semibold"
          >
            85k <br /> (senior)
          </Link>
        </div>
        <div className="w-full flex w-4/5 min-w-[350px]">
          <Link
            to="/upload"
            className="bg-sky-200 py-4 border m-auto w-2/5 text-center text-xl font-semibold"
          >
            100k+ <br /> (Head-off level)
          </Link>
          <Link
            to="/upload"
            className="bg-sky-200 py-4 border m-auto w-2/5 text-center text-xl font-semibold"
          >
            150k+ <br /> (C-level)
          </Link>
        </div>
        <div className="w-full flex w-4/5 min-w-[350px]">
          <Link
            to="/upload"
            className="bg-sky-200 py-4 border m-auto w-3/5 text-center text-2xl font-bold"
          >
            Individual
          </Link>
        </div>
      </section>
    </div>
  );
};
