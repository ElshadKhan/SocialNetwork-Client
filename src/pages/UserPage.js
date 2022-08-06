import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Context } from "..";

const UserPage = observer( () => {
  const {user} = useContext(Context)
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://s1.1zoom.ru/b4344/471/Owls_Birds_Glance_537043_2560x1440.jpg"
            />
            <Card.Body>
              <Card.Title>Dad</Card.Title>
            </Card.Body>
          </Card>
          <Button variant="primary" className="mt-3 p-6">
            Create Post
          </Button>
        </Col>
        <Col md={8}>

        </Col>
      </Row>
    </Container>
  );
});

export default UserPage;
