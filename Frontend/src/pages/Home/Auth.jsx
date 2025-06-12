import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight, Truck } from "lucide-react";

const Auth = () => {
  const [Email, setEmail] = useState("");
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="hero-bg w-full relative ">
      <header className="max-w-6xl mx-auto flex justify-between items-center px-4 pb-10">
        <Link to={"/"}>
          <img
            src="/netflix-logo.png"
            alt="netflix-logo"
            className="w-32 md:w-52"
          />
        </Link>
        <Link
          to={"/signup"}
          className="w-20 bg-red-700 text-center px-2 py-2 rounded text-white hover:bg-red-400"
        >
          Signup
        </Link>
      </header>

      {/* main section */}
      <div className="mx-auto py-40 flex flex-col justify-center items-center max-w-6xl  ">
        {/* <div className='flex flex-col justify-center items-center'>
                <h1 className='text-white text-[3.5rem] font-bold'>Unlimited Movies, Tv Shows and more</h1>
                <p className='text-white '>Watch anywhere. Cancel anytime.</p>
                <p className='text-white'>Ready to watch?Enter your email to create or restart your membership.</p>
                <div className='flex flex-col justify-center items-center sm:justify-center flex-row gap-3 '>
                <div>
                    <input type="text" id="email" placeholder='Email address' className='text-white px-2 mt-4 border border-gray-700  focus:outline-none focus:ring' />
                </div>
                <div>
                <button className='bg-red-700 px-2 text-white'>Get Started</button>
                </div>
                </div> */}
        <h1 className="text-4xl text-white md:text-6xl font-bold mb-4">
          Unlimited Movies, Tv Shows and more
        </h1>
        <p className="mb-4 text-white text-lg">
          Watch anywhere. Cancel anytime.
        </p>
        <p className="text-white text-lg mb-4">
          Ready to watch?Enter your email to create or restart your membership.
        </p>
        <form
          className="flex flex-col md:flex-row w-1/2 gap-4 "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Emailaddress"
            id="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="mx-4 focus:outline-none focus:ring text-white px-2  py-1 border border-gray-400 "
          />
          {/* <Link to="/" className='text-white item-center bg-red-700 hover:bg-red-400 text-lg px-2 py-1 rounded shadow-2xl'>Get Started</Link> */}
          <button className="bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center">
            Get Started
            <ChevronRight className="size-8 md:size-10" />
          </button>
        </form>
      </div>



  {/* new section */}
      <div className="py-6 bg-black text-white">
        <div className="max-w-6xl flex flex-col md:flex-row px-4 md:px-2 mx-auto justify-center items-center">
          {/* left div */}

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Enjoy on your TV
            </h2>
            <p className="text-lg md:text-xl">
              {" "}
              Watch on Smart TVs, PlayStation, XBox, Chromecast, Apple TV,
              Blue-ray Players, and more.
            </p>
          </div>
          <div className="flex-1 relative">
            <img src="/tv.png" alt="tv_here" className="mt-8 z-20 relative" />
            <video
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10"
              playsInline
              autoPlay={true}
              muted
              loop
            >
              <source src="/hero-vid.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* seperator */}
      <div className="bg-black h-2 w-full" aria-hidden="true"></div>

      {/* second sction */}
      <div className="py-6 bg-black text-white">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row justify-center items-center px-4 md:px-2">
          {/* left div */}
          <div className=" flex-1">
            <div className="relative">
              <img
                src="/stranger-things-lg.png"
                alt="stranger-things-logo"
                className="mt-8"
              />

              <div className="flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black w-3/4 lg:w-1/2 h-24 border border-slate-500 rounded-md px-2">
                <img
                  src="/stranger-things-sm.png"
                  alt="image"
                  className="h-full"
                />
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-0">
                    <span className="text-md lg:text-lg font-bold">
                      Stranger Things
                    </span>
                    <span className="text-sm text-blue-500">
                      Downloading...
                    </span>
                  </div>

                  <img
                    src="/download-icon.gif"
                    alt="gifimage"
                    className="h-12"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Download your shows to watch offline
            </h1>
            <p className="text-lg md:text-xl ">
              save your favourite easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>

    

      {/* seperator */}
      <div className="h-2 w-full bg-black" aria-hidden="true"></div>

      {/* THird section */}
      <div className="py-10 bg-black text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-2 ">
          {/* left div */}
          <div className="flex-1  text-center sm:text-left">
            <h2 className="text-4xl text-center md:text-5xl font-extrabold mb-4">
              Watch Everywhere
            </h2>
            <p className="text-lg md:text-xl">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>

          {/* right section */}
          <div className="flex-1 relative overflow-hidden">
            <img src="/device-pile.png" alt="tvlogo" className="mt-8 z-20 relative" />

            {/* tv section */}

            <video
              playsInline 
              loop
              muted 
              autoPlay={true}
              className="absolute  top-14 left-1/2 -translate-x-1/2  h-1/2 z-10 max-w-[63%] "
            > 
              <source src="/video-devices.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* the last section */}
      <div className="py-10 bg-black text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-2">
         
         {/* left side */}
         <div className="flex-1 relative">
         <img src="/kids.png" alt="kids photo" className="mt-8" />   
         
         </div>
         

         {/* right side */}
         <div className="flex-1  text-center sm:text-left">

          <h1 className="text-4xl text-center md:text-5xl  font-extrabold mb-4">Create Profile for kids</h1>
          <p className="text-lg text-center sm:text-lg ">Send kids on adventures with their favorite characters in a space made just for them-free with your memebership</p>
         </div>

        </div>

      </div>
    </div>
  );
};

export default Auth;
