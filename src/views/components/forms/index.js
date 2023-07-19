import React, { Component } from 'react';
import { Container, Form } from 'react-bootstrap';

class Forms extends Component {
    render() {
        return (
            <Container className="App">
                <Form>
                    <Form.Group controlId='formName'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' placeholder='Digite seu nome' />
                    </Form.Group>
                    <Form.Group controlId='formName'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' placeholder='name@example.com' />
                    </Form.Group>
                    <Form.Group controlId='formName'>
                        <Form.Label>Obs</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}

export default Forms;