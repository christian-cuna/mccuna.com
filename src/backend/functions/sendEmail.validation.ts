import ow from 'ow';

import { ValidateParamsArgs, ValidateParamsResult } from './sendEmail.types';

export const validate = ({
  email,
  name,
  subject,
  body,
}: ValidateParamsArgs): ValidateParamsResult => {
  try {
    ow(email, 'Email is not valid.', isEmail);
    ow(name, 'Name is too short.', ow.string.minLength(2));
    ow(name, 'Name is too long.', ow.string.maxLength(60));
    ow(subject, 'Subject too short. Please expand it.', ow.string.minLength(5));
    ow(
      subject,
      'Subject is oo long. Please summarize it.',
      ow.string.maxLength(120),
    );
    ow(
      body,
      'Body is too short. Add a few more details please.',
      ow.string.minLength(50),
    );
    ow(
      body,
      'Body is too long. Please summarize it a bit.',
      ow.string.minLength(50),
    );
    return {
      areValid: true,
    };
  } catch (error) {
    return {
      areValid: false,
      errorMsg: error.messsage,
    };
  }
};

// Thanks Kent C Dodds!
const isEmail = ow.string.is(e => /^.+@.+\..+$/.test(e));
