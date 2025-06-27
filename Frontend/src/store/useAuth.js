import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  isSigningup: false,
  isCheckingAuth:true,
  signup: async (Credential) => {
    set({ isSigningup: true });
    try {
      const response = await axios.post("/api/auth/signup", Credential);
      set({ user: response.data.user, isSigningup: false });
      toast.success("account created successfully");
    } catch (error) {
    toast.error(error?.response?.data?.message || "an error occured")
    set({isSigningup:false,user:null})       
    }
  },
  // login:async(Credential)=>{
  //   set({isSigninup:false})
  //   try {
  //     const response=await axios("/api/auth/login",Credential)
  //     set({user:response.data.user,isSigningup:true})
  //     toast("account logged in successfully")
      
  //   } catch (error) {
  //     toast.error(error?.response?.data?.message || "an error  occured")
  //     set({user:null,isSigningup:false})
      
  //   }
  // }
  authCheck:async()=>{
    set({isCheckingAuth:true})
    try {
      const response=await axios.get("/api/auth/authCheck")
      set({user:response.data.user,isCheckingAuth:false})
      
    } catch (error) {
      console.log("something went wrong",error.message)
      set({user:null,isCheckingAuth:false})
    }
  },
 
}));
