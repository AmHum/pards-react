import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

//create user page for owners back end logins
function CreateUser() {
  return (
    <Container fluid="md">
      <Row>
        <Col className="mx-auto my-5">
          <h1 id="about">
            <style>Create New User</style>
          </h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateUser;
