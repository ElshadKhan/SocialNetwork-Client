import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Button,  Modal, Form } from "react-bootstrap";
import { Context } from "..";
import { updateUserLogin } from "../http/userApi";

const ReName = observer( ({show, onHide}) => {
  const {user} = useContext(Context)
  const [username, setUsername] = useState('')
  const id = user.user.id
  
  const addInfo = () => {
      const data = updateUserLogin(id, username)
  }
  return (
    <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Изменить Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" 
            controlId="exampleForm.ControlInput1">
            </Form.Group>
            <Form.Group
              className="mb-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Описание к фото</Form.Label>
              <Form.Control 
              as="textarea" 
              value={username} 
              onChange={e => setUsername(e.target.value)} 
              rows={2} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={addInfo}>
            Заменить
          </Button>
        </Modal.Footer>
      </Modal>
  );
});

export default ReName;