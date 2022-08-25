import Auth from "../pages/Auth.js";
import PostPage from "../pages/PostPage";
import UserPage from "../pages/UserPage";
import {
  USER_ROUTE,
  POSTS_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from "../utils/consts";

export const authRoutes = [
  {
    path: USER_ROUTE + "/:id",
    Component: UserPage,
  },
  {
    path: POSTS_ROUTE,
    Component: PostPage,
  },
];
export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
];
