import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export default async function (request: NextApiRequest, response: NextApiResponse ) {
  if (request.method !== 'POST')
    response.status(300).send('Request not accepted');
  const { email, fullName, subject, message } = JSON.parse(request.body);


  const transport = nodemailer.createTransport({
    service: 'gmail',
    /*
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.DESTINATION_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${fullName} (${email}) RE: ${subject}`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err, info) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message );
        }
      });
    });

  try {
    await sendMailPromise();
    response.status(200).json({ message: 'Email sent' });
  } catch (err) {
    response.status(500).json({ error: err });
  }
}
