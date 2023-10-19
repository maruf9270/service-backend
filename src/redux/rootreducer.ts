import { baseApi } from "./api/baseApi";
import authSlice from "./features/auth/authSlice";

export const reducer = {
  user: authSlice,
  [baseApi.reducerPath]: baseApi.reducer,
};
