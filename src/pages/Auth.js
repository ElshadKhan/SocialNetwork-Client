import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { observer } from "mobx-react-lite";
import { Container, Form } from "react-bootstrap";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { LOGIN_ROUTE, POSTS_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userApi.js";
import { Context } from "../index";

const Auth = observer( () => {
  const {user, post} = useContext(Context)
  const location = useLocation();
  const history = useHistory();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')


  const click = async () => {
      try {
          let data;
          if (isLogin) {
              data = await login(email, password) 
              user.setIsAuth(true)
              user.setUser(data)
              // post.setSelectedUser(data)
              // console.log('datalogin to post', 
              // post.selectedUser.username)
          } else {
              data = await registration(email, password, 
              username)
              console.log('datalogin', data)
              user.setIsAuth(true)
              user.setUser(data)
              // post.setSelectedUser(data)
              // console.log('datalogin to post', data)

          }
          history.push(POSTS_ROUTE)
      } catch (error) {
          alert(error.response.data.message)
      }
  }
    user.setIsAuth(false)
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 
        "Авторизация" 
        : 
        "Регистрация"}
        </h2>
        {isLogin ? 
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" 
          placeholder="Введите ваш email..." 
          value={email} 
          onChange={e => setEmail(e.target.value)}/>
          <Form.Control className="mt-3" 
          placeholder="Введите ваш пароль..." 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          type="password"/>
          <Button className="mt-3 align-self-end" 
          variant="outline-success" onClick={click}>
              Войти
          </Button>
          <div>
            Нет аккаунта?{" "}
            <NavLink to={REGISTRATION_ROUTE}>
              Зарегистрируйся!
            </NavLink>
          </div>
        </Form>
        :
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" 
          placeholder="Введите ваш email..." 
          value={email} 
          onChange={e => setEmail(e.target.value)}/>
          <Form.Control className="mt-3" 
          placeholder="Введите ваш пароль..." 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          type="password"/>
          <Form.Control className="mt-3" 
          placeholder="Введите ваш login..." 
          value={username} 
          onChange={e => setUsername(e.target.value)}/>
          <Button className="mt-3 align-self-end" 
          variant="outline-success" onClick={click}>
            Регистрация
          </Button>
          <div>
            Есть аккаунт?{" "}
            <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
          </div>
        </Form>
        }
      </Card>
    </Container>
  );
});

export default Auth;
