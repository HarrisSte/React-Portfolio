//Importing necessary files for the contact section.
import React from 'react';
import '../Contact/Contact.css';

//Contact form that will error when fields are left blank.
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send');
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <div className='container mt-5'>
      <h2 className='mb-3 contactTitle'>Contact</h2>
      <p className='mb-3 contactDesc'>
        Please reach out should you have any questions or comments!
      </p>
      <form onSubmit={onSubmit}>
        <div className='mb-3'>
          <label className='form-label' htmlFor='name'>
            Name
          </label>
          <input className='form-control' type='text' id='name' required />
        </div>
        <div className='mb-3'>
          <label className='form-label' htmlFor='email'>
            Email
          </label>
          <input className='form-control' type='email' id='email' required />
        </div>
        <div className='mb-3'>
          <label className='form-label' htmlFor='message'>
            Message
          </label>
          <textarea className='form-control' id='message' required />
        </div>
        <button className='btn btn-danger' type='submit'>
          {formStatus}
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
