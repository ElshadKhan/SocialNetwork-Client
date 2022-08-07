import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  ListGroup,
  Row,
} from "react-bootstrap";
import { Context } from "../index";

const UserBar = observer(() => {
  const { post } = useContext(Context);
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://s1.1zoom.ru/b4344/471/Owls_Birds_Glance_537043_2560x1440.jpg"
        />
        <Card.Body>
          <Card.Title>Dad</Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
});

export default UserBar;
