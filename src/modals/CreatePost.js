import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Button,  Modal, Form } from "react-bootstrap";
import { Context } from "..";
import { createPost } from "../http/postApi";

const CreatePost = observer( ({show, onHide}) => {
  const {post,user} = useContext(Context)
  const [file, setFile] = useState(null)
  const [text, setText] = useState('')
  const [username, setUsername] = useState(null)
  const [info, setInfo] = useState([])

  const selectFile = e => {
    setFile(e.target.files[0])
  }
  const addInfo = () => {
      const formData = new FormData()
      formData.append('content', text)
      formData.append('picture', file)
      console.log(user.user.id)
      formData.append('userId', user.user.id) 
      createPost(formData).then(data => onHide())
  }

  return (
    <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить пост</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" 
            controlId="exampleForm.ControlInput1">
              <Form.Label>Фотография</Form.Label>
              <Form.Control
                type="file"
                onChange={selectFile}
                placeholder="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Описание к фото</Form.Label>
              <Form.Control 
              as="textarea" 
              value={text} 
              onChange={e => setText(e.target.value)} 
              rows={2} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={addInfo}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
  );
});

export default CreatePost;