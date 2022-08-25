import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import { Button, Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { LOGIN_ROUTE, POSTS_ROUTE, USER_ROUTE } from "../utils/consts";
import { useHistory } from "react-router-dom";
import Auth from "../pages/Auth";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { check } from "../http/userApi";
const NavBar = observer(() => {
  const { user, post } = useContext(Context);
  const history = useHistory();
  // const [ userInfo, setUserInfo] = useState( {info: []})
  // const id = useParams()
  // console.log(id)
  // useEffect( () => {
  //   add().then(data => setUserInfo(data))
  // })

  const logOut = () => {
    user.setUser({});
    console.log(post.selectedUser);
    post.setSelectedUser({});
    console.log(post.selectedUser);
    user.setIsAuth(false);
    history.push(LOGIN_ROUTE);
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
              onClick={() => history.push(USER_ROUTE + `/${user.user.id}`)}
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
