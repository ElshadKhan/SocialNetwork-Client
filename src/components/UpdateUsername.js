import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Button, Container} from "react-bootstrap";
import ReName from "../modals/ReName";


const UpdateUsername = observer(() => {
  const [addPostVisible, setAddPostVisible] = useState(false);

  return (
    <Container>
      <Button 
      variant="primary" 
      className="mt-3 p-6" 
      onClick={() => setAddPostVisible(true)}>
        Update User Login
      </Button>
      <ReName
        show={addPostVisible}
        onHide={() => setAddPostVisible(false)}
      />
    </Container> 
  );
});

export default UpdateUsername;
