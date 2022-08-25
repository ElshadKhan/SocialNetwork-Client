import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddPost from "../components/AddPost";
import UserBar from "../components/UserBar";
import UserPosts from "../components/UserPosts";
import UpdateUsername from "../components/UpdateUsername";
import { Context } from "..";

const UserPage = () => {
  const { post } = useContext(Context);
  console.log("belissimo", post.post[0].user);
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
