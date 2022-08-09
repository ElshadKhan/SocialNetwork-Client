import React, { useContext, useEffect, useState } from "react";
import {observer} from "mobx-react-lite"
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Context } from "../index";
import {useParams} from 'react-router-dom'
import UserPosts from "../components/UserPosts";
import { fetchPosts } from "../http/postApi";



const PostPage = observer( () => {
  const {post} = useContext(Context)
  const params = useParams()
  useEffect(() => {
    fetchPosts().then(data => post.setPosts(data.reverse()))
    console.log(post.content)
  }, []) 

  return ( 
    <Container>
     <Row className="d-flex justify-content-center" >
    {post.post.map(post =>
    <Card key={post.id} style={{ width: 600 }} className="p-3 mt-5 ">
      <Card.Title>mey</Card.Title>
      <Card.Img variant="top" src={"http://localhost:5000/" + post.picture} />
      <Card.Body>
        <Card.Text>
          {post.content}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <ListGroup className="list-group-flush">{post.createdAt}</ListGroup>
      </Card.Body>
    </Card>
    )}
    </Row>
    </Container>
  );
});

export default PostPage;
