import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import nodemailer from 'nodemailer';
import doc from 'rehype-document';
import format from 'rehype-format';
import html from 'rehype-stringify';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import unified from 'unified';
import { VFileContents } from 'vfile';

import { validate } from './sendEmail.validation';

export async function handler(
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> {
  const { email, name, body, subject } = JSON.parse(event.body);

  const transporter = getMailTransporter();
  const paramsValidationResult = validate({ email, name, body, subject });

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
      html: (await convertMarkdownToHtml(body)).toString(),
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
