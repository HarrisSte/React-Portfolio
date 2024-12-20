import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_znnsb78',
        'template_20ys677',
        e.target,
        '9UU4utWsuQtaqJNkA'
      )
      .then(
        (result) => {
          console.log(result.text);
          setModalTitle('Success');
          setModalMessage('Your message has been sent successfully!');
          setShowModal(true);
        },
        (error) => {
          console.error('Error sending email:', error.text);
          setModalTitle('Error');
          setModalMessage(
            'There was an error sending your message. Please try again later.'
          );
          setShowModal(true);
        }
      );

    // Reset form fields
    setFormState({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Container>
      <Row className='contact-pg'>
        <Col sm={4}>
          <h2>Reach out!</h2>
          <br />
          <p>
            Have questions? Interested in working together? Send me a message
            and I'll get back to you as soon as possible.
          </p>
        </Col>
        <Col sm={8}>
          <div className='contact-form'>
            <form onSubmit={handleSubmit}>
              <input
                className='name mb-1'
                type='text'
                id='name'
                name='name'
                placeholder='First and Last Name'
                value={formState.name}
                onChange={handleChange}
                required
              />

              <input
                className='email mb-1'
                type='email'
                id='email'
                name='email'
                placeholder='Your email address'
                value={formState.email}
                onChange={handleChange}
                required
              />

              <textarea
                id='message'
                name='message'
                placeholder='Leave your message here!'
                value={formState.message}
                onChange={handleChange}
                required
              />
              <button className='contact-submit' type='submit'>
                Send my message!
              </button>
            </form>
          </div>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Contact;
