import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Context } from "../index";
import { authRoutes, publicRoutes } from "../routes/routes";
import { LOGIN_ROUTE } from "../utils/consts.js";

const AppRouter = () => {
  const { user } = useContext(Context);
  return (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      {user.isAuth === true &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
