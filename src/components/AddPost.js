import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
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
import CreatePost from "../modals/CreatePost";

const AddPost = observer(() => {
  const [addPostVisible, setAddPostVisible] = useState(false);
  return (
    <Container>
      <Button 
      variant="primary" 
      className="mt-3 p-6" 
      onClick={() => setAddPostVisible(true)}>
        Create New Post
      </Button>
      <CreatePost
        show={addPostVisible}
        onHide={() => setAddPostVisible(false)}
      />
    </Container>
  );
});

export default AddPost;
