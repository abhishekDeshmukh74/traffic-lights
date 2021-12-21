import { Transporter, createTransport, SendMailOptions, SentMessageInfo } from 'nodemailer';

import { ENVIRONMENT } from '@environment';

class EmailHelper {

  // transporter: Transporter = createTransport({
  //     service: ENVIRONMENT.EMAIL.SERVICE,
  //     port: 25,
  //     secure: false,
  //     requireTLS: true,
  //     auth: {
  //         user: ENVIRONMENT.EMAIL.USERNAME,
  //         pass: ENVIRONMENT.EMAIL.PASSWORD,
  //     },
  //     tls: {
  //         rejectUnauthorized: false,
  //     },
  // });

  private transporter: Transporter = createTransport({
    service: ENVIRONMENT.EMAIL.SERVICE,
    auth: {
      user: ENVIRONMENT.EMAIL.USERNAME,
      pass: ENVIRONMENT.EMAIL.PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  async verifyEmail(email: string, verifyToken: string): Promise<SentMessageInfo> {
    try {
      const mailOptions: SendMailOptions = {
        from: ENVIRONMENT.EMAIL.SENDER_EMAIL,
        sender: ENVIRONMENT.EMAIL.SENDER_DISPLAY_ADDRESS,
        to: email,
        subject: `Geospoc: Verify email`,
        text: `${ENVIRONMENT.BACK_END_URL}/verify/${verifyToken}`,
      };
      return await this.transporter.sendMail(mailOptions);

    } catch (e) {
      throw new Error(e.message);
    }
  }
}

export const emailHelper = new EmailHelper();
