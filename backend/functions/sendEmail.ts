import {
  APIGatewayEvent,
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from 'aws-lambda';
import nodemailer from 'nodemailer';
import ow from 'ow';
import doc from 'rehype-document';
import format from 'rehype-format';
import html from 'rehype-stringify';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import unified from 'unified';
import { VFileContents } from 'vfile';

import { ValidateParamsArgs, ValidateParamsResult } from './sendEmail.types';

export async function handler(
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> {
  const { email, name, body, subject } = JSON.parse(event.body);

  const transporter = getMailTransporter();
  const paramsValidationResult = validateParams({ email, name, body, subject });

  if (!paramsValidationResult.areValid) {
    // eslint-disable-next-line no-console
    console.log(paramsValidationResult.errorMsg);

    return {
      statusCode: 400,
      body: JSON.stringify({ message: paramsValidationResult.errorMsg }),
    };
  }

  try {
    await transporter.verify();
    await transporter.sendMail({
      from: `"${name}" ${email}`,
      to: `"McCuna" ${process.env.EMAIL_USER}`,
      subject,
      html: body,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Unabled to send contact email:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'An error has occurred while sending the email.',
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Email sent successfully' }),
  };
}

const validateParams = ({
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

const convertMarkdownToHtml = async (
  mdToConvert: string,
): Promise<VFileContents> => {
  const result = await unified()
    .use(markdown)
    .use(remark2rehype)
    .use(doc)
    .use(format)
    .use(html)
    .process(mdToConvert);

  return result.contents;
};

const getMailTransporter = () => {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

// Thanks Kent C Dodds!
const isEmail = ow.string.is(e => /^.+@.+\..+$/.test(e));
