import React, { useContext, useState } from "react";
import { Button,  Modal, Form } from "react-bootstrap";
import { Context } from "..";

const CreatePost = ({show, onHide}) => {
  const {post} = useContext(Context)
  const [info, setInfo] = useState([])

  const addInfo = () => {
    setInfo( [...info, {}])
  }

  return (
    <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить пост</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Фотография</Form.Label>
              <Form.Control
                type="file"
                placeholder="Загрузите фотографию"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Описание к фото</Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={onHide}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
  );
};

export default CreatePost;