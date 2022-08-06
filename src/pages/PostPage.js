import React from "react";
import { Button, Card, Col, Container, ListGroup } from "react-bootstrap";

const PostPage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center ">
    <Card style={{ width: 700 }} className="p-3 mt-3 ">
      <Card.Title>Login пользователя</Card.Title>
      <Card.Img variant="top" src="https://klike.net/uploads/posts/2019-05/1556708032_1.jpg" />
      <Card.Body>
        <Card.Text>
          Текст поста.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <ListGroup className="list-group-flush">Time</ListGroup>
      </Card.Body>
    </Card>
    </Container>
  );
};

export default PostPage;
