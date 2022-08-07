import React, { useContext } from "react";
import { Context } from "..";
import { Button, Container, Navbar } from  "react-bootstrap"
import Nav from  "react-bootstrap/Nav"
import { NavLink } from "react-router-dom";
import Auth from "../pages/Auth";
import {observer} from "mobx-react-lite"
import PostPage from "../pages/PostPage";
import UserPage from "../pages/UserPage";
import { LOGIN_ROUTE, POSTS_ROUTE, REGISTRATION_ROUTE, USER_ROUTE } from "../utils/consts";
import { useHistory } from "react-router-dom";
const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory()
  return (
    <Navbar bg="dark" variant="dark">
        <Container> 
        <NavLink style={{color: 'white'}} to={REGISTRATION_ROUTE}>NinjaGram</NavLink>
        {user.isAuth ?
          <Nav className="mr-auto"  style={{color: 'white'}}>
              <Button variant={"outline-light"} onClick={() => history.push(USER_ROUTE + '/:id')}>Пользовательская панель</Button>
              <Button variant={"outline-light"} className="ml-2" onClick={() => history.push(LOGIN_ROUTE)}>Выйти</Button>
          </Nav> 
        :
          <Nav className="mr-auto" style={{color: 'white'}}>
              <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)} >Авторизация</Button>
          </Nav>
        }
        </Container>
    </Navbar>
  );
});

export default NavBar;
