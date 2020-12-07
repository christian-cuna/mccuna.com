import { ValidateParamsResult } from 'backend/functions/sendEmail.types';
import { validate } from 'backend/functions/sendEmail.validation';
// import ow from 'ow';
// import React, { useState } from 'react';

// const useEmailSender = () => {
//   const validateFields = ({
//     email,
//     name,
//     subject,
//     body,
//   }): ValidateParamsResult => {
//     return validate({ email, name, subject, body });
//   };

//   const sendEmail = ({ email, name, subject, body }) => {
//     await fetch('',{
//       body: JSON.stringify({ email, name, subject, body }),
//       method: 'POST',
//     });
//   };

//   return {
//     validateFields,
//     sendEmail,
//   };
// };

// type Result = {
//   to: string;
//   subject: string;
//   body: string;
// };

// export default useEmailSender;
