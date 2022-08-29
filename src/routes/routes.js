/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import Auth from "../pages/Auth";
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
    path: `${USER_ROUTE}/:id`,
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
