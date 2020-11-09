import React, { FunctionComponent } from 'react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

const Contact: FunctionComponent = () => {
  return (
    <>
      <SEO title='Contact' description='Send an email to McCuna' />
      <ContactForm />
    </>
  );
};

export default Contact;
