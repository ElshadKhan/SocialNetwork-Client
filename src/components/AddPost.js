import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Button, Container} from "react-bootstrap";
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
