import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  isSigningup: false,
  islogginIn:false,
  isCheckingAuth:true,
  isLoggingOut:false,
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
  login:async(Credential)=>{
    set({islogginIn:true})
    try {
    const response=await axios.post("/api/auth/login",Credential)
   set({user:response.data.user, islogginIn:false})
   toast.success("logged in successfully")
    } catch (error) {
      set({islogginIn:false,user:null})
      toast.error(error.response.data.message || "loggin failed")
      
    }
  },
  
  logout:async()=>{
    set({isLoggingOut:true})
         try {
          await axios.options("/api/auth/logout")
          set({user:null,isLoggingOut:false})
          toast.success("logged out successfully")
         } catch (error) {
          set({isLoggingOut:false})
          toast.error(error.response.data.message || "Logout failed")
          
         }
  },
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
