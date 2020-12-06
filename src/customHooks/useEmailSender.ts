import ow from 'ow';
import React, { useState } from 'react';

const useEmailSender = () => {
  const [errors, setErrors] = useState<Errors>({
    body: '',
    subject: '',
    to: '',
  });

  const sendEmail = () => {
    ow(to, ow.string.is());
  };

  return {
    errors,
    sendEmail,
  };
};

type Result = {
  to: string;
  subject: string;
  body: string;
};

export default useEmailSender;
