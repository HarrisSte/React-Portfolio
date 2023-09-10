import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

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
      setEmailSent(true);
    } else {
      alert('Oops, all fields are required!');
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2 className='contact-subtitle'>
              Please reach out should you have any questions or comments!
            </h2>
          </Col>
          <Col>
            <div className='contact-form'>
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
              <button className='contact-submit p-3' onClick={submit}>
                Send my message!
              </button>
              <span className='email-sent fs-5 fw-bold'>
                {emailSent
                  ? "Awesome, your message is sent and I'll be in touch soon!"
                  : ''}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
