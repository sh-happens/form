import React from "react";

export const Thanks = () => {
  return (
    <div className="bg-[url('/src/assets/rainbow.jpg')] bg-cover w-screen h-screen">
      <section
        className="h-1/2 w-1/4 bg-white/50 m-auto translate-y-[30%] flex 
      flex-col items-center justify-evenly rounded-[20px] shadow-xl min-w-[350px] p-4 min-h-[400px]"
      >
        <h1 className="text-3xl font-bold text-center">
          Danke, dass du an unserem Interview teilgenommen hast!
        </h1>
      </section>
    </div>
  );
};
