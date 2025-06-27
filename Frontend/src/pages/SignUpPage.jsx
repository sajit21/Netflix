import {React,useState} from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuth";
const SignUpPage = () => {
  const {searchParams}=new URL(document.location);
  const emailValue=searchParams.get("email");

    const [Username,setUsername]=useState("")
    const [Email,setEmail]=useState(emailValue || "")
    const [Password,setPassword]=useState("")

  const {signup}=useAuthStore();


    const handlesubmit=(e)=>{
        e.preventDefault();
   signup({
      email: Email,
     username: Username,
     password: Password })  }

        
  return (
    <div className="h-screen w-full hero-bg ">
      <header className="max-w-6xl mx-auto px-4 flex justify-between   items-center">
        <Link to={"/"}>
          <img src="netflix-logo.png" alt="netflix-logo" className="w-52" />
        </Link>
      </header>

      <div className="flex justify-center items-center mt-20 mx-3">
        <div className="w-full max-w-md p-8 space-y-4 bg-black/60 rounded-lg shadow-md ">
          <header className="text-white text-center text-2xl font-bold mb-8">
            Signup
          </header>
       


        <form className="space-y-5" onSubmit={handlesubmit}>
            <div className="">
                <label htmlFor="mail" className=" text-sm font-medium text-gray-500 block">Email</label>
                <input type="text" id="mail" placeholder="Example@gmail.com" value={Email} onChange={(e)=>setEmail(e.target.value)}
                className="w-full px-3 py-2 mt-1 border border-gray-700 text-white  rounded-md focus:outline-none focus:ring" />
            </div>
             <div>
                <label htmlFor="username" className="text-sm font-medium text-gray-500 block">Username</label>
                <input type="text" id="username" placeholder="Username" value={Username} onChange={(e)=>setUsername(e.target.value)} className="w-full px-3 py-2 mt-1 border border-gray-700 text-white focus:outline-none focus:ring" />
            </div>
            <div>
                <label htmlFor="password" className="text-sm font-medium text-gray-500 block">Password</label>
                <input type="password" id="password" placeholder="********" value={Password} onChange={(e)=>setPassword(e.target.value)} className="w-full px-3 py-2 mt-1 border border-gray-700 text-white focus:outline-none focus:ring" />
            </div>
            <button className="w-full bg-red-700 text-white p-2 font-semibold hover:bg-red-400">Signup</button>
        </form>
         <div className="text-center text-gray-500">Already a member? {""}
            <Link to={"/login"} className=" text-red-700 hover:underline">Login</Link>
         </div>



         </div>


      </div>
    </div>
  );
};

export default SignUpPage;
