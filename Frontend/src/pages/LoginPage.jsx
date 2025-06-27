import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuth";

const LoginPage = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const {login}=useAuthStore();

  const handleLogin = (e) => {
    e.preventDefault();
    login({
      email: Email,
     password: Password,
    });
  };

  return (
    <div className="hero-bg w-full h-screen">
      <header className="max-w-6xl mx-auto px-4 w-full flex justify-between items-center ">
        <Link to={"/"}>
          <img src="netflix-logo.png" alt="netflixlogo" className="w-52" />
        </Link>
      </header>

      <div className="w-full mt-20 px-8 flex justify-center items-center">
        <div className="w-full max-w-md bg-black/60 space-y-4 p-8  rounded-lg shadow-md">
          <header className="w-full text-center font-bold text-white text-2xl">
            Login
          </header>
          <form onSubmit={handleLogin} className="space-y-8">
            <div>
              <label
                htmlFor="mail"
                className="text-sm font-medium text-gray-500"
              >
                Email
              </label>
              <input type="text" id="mail" placeholder="Example@gmail.com" value={Email} onChange={(e)=>setEmail(e.target.value)}   className="w-full text-white px-3 py-2 mt-1 border border-gray-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-500"
              >
                Password
              </label>
              <input type="password" id="password" placeholder="************" value={Password} onChange={(e)=>setPassword(e.target.value)}   className="w-full px-3 py-2 mt-1 text-white border border-gray-500 focus:outline-none focus:ring" />
            </div>
            
            <button className="w-full hover:bg-red-400 p-2 text-white    bg-red-700">Login</button>
          </form>
          <div className="text-center text-gray-500">Haven't registered yet?
            <Link to={"/signup"} className="text-red-700 hover:underline">Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
