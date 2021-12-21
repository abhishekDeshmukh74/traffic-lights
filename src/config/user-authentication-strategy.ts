import { google } from 'googleapis';

import { CONSTANTS } from '@constants';
import { ENVIRONMENT } from '@environment';

export const oAuth2Client = new google.auth.OAuth2(
  CONSTANTS.GOOGLE_CLIENT_ID,
  CONSTANTS.GOOGLE_CLIENT_SECRET,
  `${ENVIRONMENT.FRONT_END_URL}/blog/google/callback`,
);

export const consentUrl = oAuth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',
  scope: [
    'openid', 'profile', 'email',
  ],
});

// export const data: any = async getUserInfo(code){
//   const credentials = await this.oAuth2Client.getToken(code)
//   this.oAuth2Client.setCredentials(credentials.tokens);
//   const plus = google.plus({
//     version: 'v1',
//     auth: this.oAuth2Client,
//   });
//   const data = await plus.people.get({ userId: 'me' });
//   return data;
// }
