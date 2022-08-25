import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Context } from "../index";
import CreatePost from "../modals/CreatePost";
import { deleteUser } from "../http/userApi";
import { useHistory } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";

const AddPost = observer(() => {
  const { user } = useContext(Context);
  const [addPostVisible, setAddPostVisible] = useState(false);
  const history = useHistory();

  const logOut = () => {
    deleteUser(user.user.id);
    history.push(LOGIN_ROUTE);
  };
  return (
    <Container>
      <Button
        variant="primary"
        className="mt-3 p-6"
        onClick={() => setAddPostVisible(true)}
      >
        Create New Post
      </Button>
      <Button variant="primary" className="mt-3 p-6" onClick={() => logOut()}>
        Delet Account
      </Button>
      <CreatePost
        show={addPostVisible}
        onHide={() => setAddPostVisible(false)}
      />
    </Container>
  );
});

export default AddPost;
