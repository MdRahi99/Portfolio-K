"use client";

import Link from "next/link";
import { Poppins, Preahvihear } from "next/font/google";
import { useState, useEffect, useContext } from "react";
import Loading from "@/app/loading";
import toast, { Toaster } from "react-hot-toast";

// Import the UserContext
import { UserContext } from "../contexts/UserProvider";

const preahvihear = Preahvihear({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});
const poppins = Poppins({
  weight: ["600"],
  subsets: ["latin"],
  display: "swap",
});

const Login = () => {
  // Access the UserContext
  const { login, loading } = useContext(UserContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const onSignIn = async (e) => {
    e.preventDefault();
    const email = user.email;
    const password = user.password;

    try {
      await login(email, password);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="mt-20">
        <form
          onSubmit={onSignIn}
          className="p-8 bg-gradient-to-r from-sky-800 to-slate-900 rounded-lg w-full lg:w-2/3 mx-auto flex flex-col items-center gap-8"
        >
          <h1 className={`${poppins.className} text-2xl my-2`}>Log In</h1>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className={`${preahvihear.className} input bg-white text-black bg-opacity-90 input-bordered focus:outline-none w-full max-w-md`}
            value={user.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            className={`${preahvihear.className} input bg-white text-black bg-opacity-90 input-bordered focus:outline-none w-full max-w-md`}
            value={user.password}
            onChange={handleChange}
            required
          />

          <div>
            {buttonDisabled ? (
              <button
                type="button"
                className={`${poppins.className} w-full lg:w-32 rounded-md px-4 py-2 uppercase opacity-50 cursor-not-allowed bg-gray-300`}
                disabled
              >
                Log In
              </button>
            ) : (
              <button
                type="submit"
                className={`${poppins.className} w-full lg:w-32 rounded-md px-4 py-2 uppercase bg-sky-700 hover:bg-sky-600`}
              >
                Log In
              </button>
            )}
          </div>

          {/* <div>
                        <h1 className='text-sm text-center'>
                            Have not any Account ?
                            <Link href='/signup' className={`${poppins.className} hover:text-[#eae8e8]`}> Sign Up</Link>
                        </h1>
                    </div> */}
        </form>
      </div>
    </>
  );
};

export default Login;
