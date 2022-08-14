import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Card, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import AddPost from "../components/AddPost";
import UserBar from "../components/UserBar";
import { Context } from "../index";
import { fetchUserPosts } from "../http/postApi";
import UserPosts from "../components/UserPosts";

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
