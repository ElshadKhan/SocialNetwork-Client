import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, Image, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Context } from "../index";

const UserPosts = observer (() => {
  const {post} = useContext(Context)
  return (
    <Row className="d-flex">
      {post.post.map(post =>
    <Col md={6}>
      <Card className="mt-4 justify-content-between align-item-center" style={{width: 450, cursor: 'pointer'}} borded={'Light'}>
        <Image width={450} height={400} src={post.picture}/>


      </Card>

    </Col>
      )}
    </Row>
  );
});

export default UserPosts;