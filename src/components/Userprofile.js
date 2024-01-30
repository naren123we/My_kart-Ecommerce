import React from "react";

const Userprofile = ({ user, signout, cartReset }) => {
  return (
   
      <div className="sm:px-5 flex flex-col items-center md:py-12 py-8 ">
        <h1 className="sm:text-xl text-base font-semibold my-3 font-mono">
          Welcome {user.name.split(" ")[0]}
        </h1>

        <div className="flex flex-col  space-y-4  px-[11px] py-4 shadow-md bg-slate-100">
          <div className="flex flex-row">
            <h3>Name :</h3>
            <p>{user.name}</p>
          </div>

          <div className="flex flex-row ">
            <h3>Email :</h3>
            <p>{user.email}</p>
          </div>

          <button
            className="px-2 py-1 disabled:opacity-60  bg-blue-500 w-[100%] rounded-sm text-lg text-white hover:text-black active:scale-105"
            onClick={() => {
              signout();
              cartReset();
            }}
          >
            Log out
          </button>
        </div>
      </div>
    
  );
};

export default Userprofile;
