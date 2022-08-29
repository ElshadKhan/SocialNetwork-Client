import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddPost from "../components/AddPost";
import UserBar from "../components/UserBar";
import UserPosts from "../components/UserPosts";
import UpdateUsername from "../components/UpdateUsername";

const UserPage = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <UserBar />
          <AddPost />
          <UpdateUsername />
        </Col>
        <Col md={8}>
          <UserPosts />
        </Col>
      </Row>
    </Container>
  );
};

export default UserPage;
