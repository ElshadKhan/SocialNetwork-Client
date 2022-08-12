import React, { useContext } from "react";
import { Context } from "..";
import { Button, Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { LOGIN_ROUTE, POSTS_ROUTE, USER_ROUTE } from "../utils/consts";
import { useHistory } from "react-router-dom";
import Auth from "../pages/Auth";
const NavBar = observer(() => {
  const { user } = useContext(Context);
  console.log(user.isAuth)
  const history = useHistory();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    history.push(LOGIN_ROUTE);
    console.log(user.user)
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={Auth}>
          NinjaGram
        </NavLink>
        {user.isAuth ? (
          <Nav className="mr-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => history.push(POSTS_ROUTE)}
            >
              Лента
            </Button>
            <Button
              variant={"outline-light"}
              onClick={() => history.push(USER_ROUTE + "/:id")}
            >
              Пользовательская панель
            </Button>
            <Button
              variant={"outline-light"}
              className="ml-2"
              onClick={() => logOut()}
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="mr-auto" style={{ color: "white" }}>
            {/* <Button
              variant={"outline-light"}
              onClick={() => history.push(LOGIN_ROUTE)}
            >
              Авторизация
            </Button> */}
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
