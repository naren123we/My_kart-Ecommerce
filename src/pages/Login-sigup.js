import { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/cart_context";
import { UserContext } from "../context/user_context";

import Userprofile from "../components/Userprofile";
const Loginsigup = () => {
  const [toggle, settoggle] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [popup, setpopup] = useState("");
  const [dissable, sedissable] = useState(false);
  const { user, userlogin, usersignup, userlogout, expires } =
    useContext(UserContext);
  const { cartReset } = useContext(CartContext);

  useEffect(() => {
    const expirationTime = new Date(expires).getTime();
    const currentTime = Date.now();

    if (expirationTime < currentTime) {
      userlogout();
      cartReset();
    }
  }, []);

  async function signup(e) {
    try {
      if (name !== "" && password !== "" && email !== "") {
        sedissable(true);
        const res = await usersignup(name, email, password);
        sedissable(false);
        setpopup(res.message);
        setname("");
        setemail("");
        setpassword("");
      } else {
        setpopup("please fill required input field");
      }
      setTimeout(() => {
        setpopup("");
      }, 4000);
    } catch (err) {
      console.log(err.message);
      setpopup(err.message);
      sedissable(false);
      setTimeout(() => {
        setpopup("");
      }, 4000);
    }
  }

  async function login(e) {
    e.preventDefault();
    try {
      if (email !== "" && password !== "") {
        sedissable(true);
        const res = await userlogin(email, password);
        console.log(res, "userlogin");
        sedissable(false);
        setpopup(res.message);
        setname("");
        setemail("");
        setpassword("");
      } else {
        setpopup("please fill required input field");
      }
      setTimeout(() => {
        setpopup("");
      }, 4000);
    } catch (err) {
      console.log(err.message);
      setpopup(err.message);
      sedissable(false);
      setTimeout(() => {
        setpopup("");
      }, 4000);
    }
  }

  return (
    <>
      {popup !== "" && (
        <h1 className="py-5 absolute top-15 w-[95%] text-blue-500 lg:mx-10 sm:mx-6 mx-2 text-sm sm:text-lg text-center font-mono font-semibold">
          {popup}
        </h1>
      )}
      {user ? (
        <Userprofile user={user} signout={userlogout} cartReset={cartReset} />
      ) : (
        <div className="sm:px-5 flex flex-col items-center md:py-12 py-8 ">
          <h1 className="font-semibold text-xl my-3 font-mono">
            {toggle ? "Sign up" : "Login"} Here
          </h1>
          <form className="flex flex-col items-center space-y-4  px-[11px] py-4 shadow-md bg-slate-100">
            {toggle && (
              <label className="flex flex-row ">
                <h3>Name :</h3>
                <input
                  name="name"
                  required
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  type="text"
                  placeholder="type your name"
                  className=" px-2 border-2 border-black rounded-md ml-[37px]"
                ></input>
              </label>
            )}

            <label className="flex flex-row ">
              <h3>Email :</h3>
              <input
                name="email"
                placeholder="type your email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                type="email"
                required
                className=" px-2 border-2 border-black rounded-md ml-[38px]"
              ></input>
            </label>

            <label className="flex flex-row ">
              <h3>Password :</h3>
              <input
                name="password"
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                type="password"
                required
                className=" px-2 border-2 border-black rounded-md ml-3"
              ></input>
            </label>

            {toggle ? (
              <button
                disabled={dissable}
                className="px-2 py-1 disabled:opacity-60 bg-blue-500 w-[100%] rounded-sm text-lg text-white hover:text-black active:scale-105"
                onClick={signup}
              >
                Sign up
              </button>
            ) : (
              <button
                disabled={dissable}
                className="px-2 py-1 disabled:opacity-60  bg-blue-500 w-[100%] rounded-sm text-lg text-white hover:text-black active:scale-105"
                onClick={login}
              >
                Login
              </button>
            )}
          </form>
          <div className="flex flex-row space-x-1 my-2">
            <p>{toggle ? "" : `Does'nt`} have an account ?</p>
            <p
              className=" text-blue-500 cursor-pointer active:scale-105"
              onClick={() => {
                settoggle(!toggle);
              }}
            >
              {toggle ? "Login" : "Create account"}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Loginsigup;
