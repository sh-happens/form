import React from "react";
import { Link } from "react-router-dom";

export const Fields = () => {
  return (
    <div className="bg-[url('/src/assets/rainbow.jpg')] bg-cover w-screen h-screen">
      <section
        className="h-1/2 w-1/4 bg-white/50 m-auto translate-y-[30%] flex 
  flex-col items-center justify-evenly rounded-[20px] shadow-xl min-w-[350px] p-4 min-h-[400px]"
      >
        <h1 className="text-3xl font-bold text-center">
          In welchen Bereichen hast du bis jetzt gearbeitet?
        </h1>
        <div className="w-full flex w-4/5 min-w-[350px]">
          <div className="bg-sky-200 py-4 border border-slate-400 rounded-lg m-auto w-1/3 text-center text-xl font-semibold">
            <input type="checkbox" value="E-Com" id="E-Com" className="mr-2" />
            <label for="E-Com">E-Com</label>
          </div>
          <div className="bg-sky-200 py-4 border border-slate-400 rounded-lg m-auto w-1/3 text-center text-xl font-semibold">
            <input
              type="checkbox"
              value="Banking"
              id="Banking"
              className="mr-2"
            />
            <label for="Banking">Banking</label>
          </div>
        </div>
        <div className="w-full flex w-4/5 min-w-[350px]">
          <div className="bg-sky-200 py-4 border border-slate-400 rounded-lg m-auto w-1/3 text-center text-xl font-semibold">
            <input
              type="checkbox"
              value="devops"
              id="devops"
              className="mr-2"
            />
            <label for="devops">Devops</label>
          </div>
          <div className="bg-sky-200 py-4 border border-slate-400 rounded-lg m-auto w-1/3 text-center text-l font-semibold">
            <input
              type="checkbox"
              value="softwareDev"
              id="softwareDev"
              className="mr-2"
            />
            <label for="softwareDev">Software Development</label>
          </div>
        </div>
        <div className="w-full flex w-4/5 min-w-[350px]">
          <div className="bg-sky-200 py-4 border border-slate-400 rounded-lg m-auto w-1/3 text-center text-xl font-semibold">
            <input
              type="checkbox"
              value="biologie"
              id="biologie"
              className="mr-2"
            />
            <label for="biologie">Biologie</label>
          </div>
          <div className="bg-sky-200 py-4 border border-slate-400 rounded-lg m-auto w-1/3 text-center text-xl font-semibold">
            <input type="checkbox" value="sales" id="sales" className="mr-2" />
            <label for="sales">Sales</label>
          </div>
        </div>
        <div className="w-full flex w-4/5 min-w-[350px]">
          <div className="bg-sky-200 py-4 border border-slate-400 rounded-lg m-auto w-1/3 text-center text-xl font-semibold">
            <input type="checkbox" value="hr" id="hr" className="mr-2" />
            <label for="hr">HR</label>
          </div>
          <div className="bg-sky-200 py-4 border border-slate-400 rounded-lg m-auto w-1/3 text-center text-xl font-semibold">
            <input
              type="checkbox"
              value="logistik"
              id="logistik"
              className="mr-2"
            />
            <label for="logistik">Logistik</label>
          </div>
        </div>
        <div className="w-full flex w-4/5 min-w-[350px]">
          <Link
            to="/exp"
            className="bg-sky-200 py-4 border border-slate-400 rounded-lg m-auto w-3/5 text-center text-2xl font-bold"
          >
            Nächste Seite
          </Link>
        </div>
      </section>
    </div>
  );
};
