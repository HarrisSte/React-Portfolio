import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submit = () => {
    if (name && email && message) {
      const serviceId = 'service_sbh5mln';
      const templateId = 'template_20ys677';
      const userId = 'q7cA_ga5eGF1FNubN';
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Oops, all fields are required!');
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className='contact-form'>
            <a href='https://www.linkedin.com/in/harrisste9/'>
              <i className='bi bi-linkedin'></i>
            </a>
            <a href='https://www.github.com/HarrisSte'>
              <i className='bi bi-github'></i>
            </a>

            <h2>Want to get in touch?</h2>
            <h5>Drop me a line!</h5>
            <input
              className='name mb-1'
              type='text'
              placeholder='First and Last Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className='email mb-1'
              type='email'
              placeholder='Your email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder='Leave your message here!'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className='contact-submit' onClick={submit}>
              Send my message!
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
