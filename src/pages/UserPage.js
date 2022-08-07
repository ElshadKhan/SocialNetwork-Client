import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import AddPost from "../components/AddPost";
import UserBar from "../components/UserBar";
import UserPosts from "../components/UserPosts";
import { Context } from "../index";

const UserPage = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <UserBar />
          <AddPost/>
        </Col>
        <Col md={8}>
        <UserPosts/>
        </Col>
      </Row>
    </Container>
  );
};

export default UserPage;
