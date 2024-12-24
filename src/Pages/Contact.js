import React from 'react'
import "../styles/Contacts.css"

function Contact() {
  return (
    <div className="contacts">
        <p className="title">Contacts</p>
        <p className='contacts-intro'>Here are some ways to reach me:</p>
        <a className="email-link" href="mailto:jchen.012004@gmail.com">Email: jchen.012004@gmail.com</a>

    </div>
  );
}

export default Contact;
