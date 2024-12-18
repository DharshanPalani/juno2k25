import React from "react";

function Footer() {
  return (
    <>
      <div className="flex items-center justify-center flex-col mt-[150px]">
        <div className="flex items-center justify-center py-6 gap-6 flex-col">
          <a className="block text-teal-600" href="/">
            <span className="sr-only">Home</span>
            <img src="src/images/juno-logo.png" alt="logo" className="h-16 w-18"></img>
          </a>
          <div className="flex space-x-4 items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 50 50">
              <path fill="white" d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
            </svg>
            <a href="" className="text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700"> @juno_2k24 </a>
          </div>
        </div>
        <div className="flex flex-col py-8 text-center justify-center items-center gap-6">
          <h1 className="font-bold text-[24px] text-white">For queries contact</h1>
          <div className="flex gap-6 justify-center items-center text-center flex-col sm:flex-row">
            <div className="flex space-y-2 flex-col">
              <h1 className="capitalize text-[20px] font-semibold text-black">Person 1</h1>
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">1234567890</h2>
            </div>
            <div className="flex space-y-2 flex-col">
              <h1 className="capitalize text-[20px] font-semibold text-black">Person 2</h1>
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">1234567890</h2>
            </div>
            <div className="flex space-y-2 flex-col">
              <h1 className="capitalize text-[20px] font-semibold text-black">Person 3</h1>
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">1234567890</h2>
            </div>
          </div>
        </div>
        <div className="py-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">@ Juno 2k24</div>
      </div>
    </>
  );
}

export default Footer;
