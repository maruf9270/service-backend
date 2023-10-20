export type IAuth = {
  _id: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  role: "super_admin" | "admin" | "user";
  email: string;
  phone: string;
  address: string;
  profileImage: Record<string, null>;
  password: string;
};
export type Icomment = {
  length: any;
  map(arg0: (comment: Icomment) => import("react").JSX.Element): unknown;
  rating: number;
  review: string;
  userId: IAuth;
};
