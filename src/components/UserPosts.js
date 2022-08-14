import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Image, Card, Col, Row } from "react-bootstrap";
import { fetchUserPosts } from "../http/postApi";
import { Context } from "../index";

const UserPosts = observer (() => {
  const {post, user} = useContext(Context)
  const userId = user.user.id
 
  useEffect(() => { 
    fetchUserPosts(userId).then((data) => post.setPosts(data.reverse()));
}, []); 

  return ( 
    <Row className="d-flex">
      {post.post.map(post =>
    <Col md={6}>
      <Card className="mt-4 justify-content-between align-item-center" style={{width: 450, cursor: 'pointer'}} borded={'Light'}>
        <Image width={450} height={400} src={"http://localhost:5000/" + post.picture}/>
      </Card>
    </Col>
      )}
    </Row>
  );
});

export default UserPosts;