import React, { useContext } from "react";
import { Context } from "..";
import { Button, Container, Navbar } from  "react-bootstrap"
import Nav from  "react-bootstrap/Nav"
import { NavLink } from "react-router-dom";
import Auth from "../pages/Auth";
import {observer} from "mobx-react-lite"
import PostPage from "../pages/PostPage";
import UserPage from "../pages/UserPage";
const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
        <Container> 
        <NavLink style={{color: 'white'}} to={Auth, PostPage, UserPage}>NinjaGram</NavLink>
        {user.isAuth ?
          <Nav className="mr-auto"  style={{color: 'white'}}>
              <Button variant={"outline-light"}>Пользовательская панель</Button>
              <Button variant={"outline-light"} className="ml-2" onClick={() => user.setIsAuth(false)}>Выйти</Button>
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
