import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  isSigningup: false,
  signup: async (Credential) => {
    set({ isSigningup: true });
    try {
      const response = await axios("/api/auth/signup", Credential);
      set({ user: response.data.user, isSigningup: false });
      toast("account created successfully");
    } catch (error) {
    toast.error(error.response.data.message || "an error occured")
    set({isSigningup:false,user:null})       
    }
  },
}));
