import { createSlice } from "@reduxjs/toolkit";
import { type } from "os";
type IInitialState = {
  user: {
    name: {
      firstName: string;
      middleName: string;
      lastName: string;
    };
    email: string;
    role: string;
    phone: string;
    address: string;
    profileImage: string;
    _id: string;
  };
  loading: boolean;
};
const initialstate: IInitialState = {
  user: {
    name: {
      firstName: "",
      middleName: "",
      lastName: "",
    },
    email: "",
    role: "",
    phone: "",
    address: "",
    profileImage: "",
    _id: "",
  },
  loading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialstate,
  reducers: {
    setuser: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
    },
    setLoadin: (state, { payload }) => {
      state.loading = payload.loading;
    },
    handleLogouts: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("loggedIn");
      state.user = initialstate.user;
    },
  },
});

export default authSlice.reducer;
export const { setuser, setLoadin, handleLogouts } = authSlice.actions;
