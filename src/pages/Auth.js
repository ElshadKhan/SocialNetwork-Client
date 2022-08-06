import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Container, Form } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  console.log(location);
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        {isLogin ? 
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Введите ваш email..." />
          <Form.Control className="mt-3" placeholder="Введите ваш пароль..." />
          <Button className="mt-3 align-self-end" variant="outline-success">
              Войти
          </Button>
          <div>
            Нет аккаунта?{" "}
            <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
          </div>
        </Form>
        :
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Введите ваш email..." />
          <Form.Control className="mt-3" placeholder="Введите ваш пароль..." />
          <Form.Control className="mt-3" placeholder="Введите ваш login..." />
          <Button className="mt-3 align-self-end" variant="outline-success">
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
};

export default Auth;
