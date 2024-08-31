"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval:any;
    if (running) {
      interval = setInterval(() => {
        setTime((pre) => pre + 10);
      }, 10);
    } else if(!running) {
       clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="flex justify-center flex-col items-center h-screen  bg-white">
      <div className="h-[300px] shadow-blue-900 bg-black max-w-[600px] w-full text-white rounded-lg">
        <div className="w-full text-2xl font-medium text-white text-center p-3">
          <h1 className="text-3xl mt-2 font-semibold">Stop Watch</h1>
        </div>
        <div className="pl-4 pr-4 mt-6 mx-auto   bg-black text-white text-center text-5xl p-4 font-medium max-w-[220px] w-full rounded-lg ">
          {" "}
          <span className="mr-3 ">{Math.floor((time /60000) % 60)}:</span>
          <span className="mr-2 ml-2">
            {Math.floor((time /1000) % 60)}:
          </span>
          <span>{Math.floor((time / 10) % 100)}</span>
        </div>
        <div className="w-full mx-auto text-center pl-4 pr-4  mt-6">
          <button
            className="px-4 py-2 rounded-lg  hover:bg-green-400 hover:px-5 hover:py-3 cursor-pointer bg-green-600 text-lg font-medium text-white"
            onClick={() => setRunning(true)}
          >
            start
          </button>
          <button
            className="px-4 py-2 rounded-lg hover:px-5 hover:py-3 cursor-pointer font-medium bg-red-600 text-lg ml-2 mr-2 text-white"
            onClick={() => setRunning(false)}
          >
            stop
          </button>
          <button
            className="px-4 py-2 rounded-lg cursor-pointer hover:px-5 hover:py-3 font-medium bg-blue-600 text-lg text-white"
            onClick={() => setTime(0)}
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
}
