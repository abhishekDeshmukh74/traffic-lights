import { google } from 'googleapis';

import { CONSTANTS } from '@constants';
import { handleException } from './error-handler';

class GoogleAnalytics {

  private scopes = ['https://www.googleapis.com/auth/analytics.readonly'];

  private jwt = new google.auth.JWT(
    CONSTANTS.GOOGLE_CLIENT_EMAIL,
    null,
    CONSTANTS.GOOGLE_PRIVATE_KEY,
    this.scopes,
  );

  private analyticsReporting = google.analyticsreporting({
    version: 'v4',
    auth: this.jwt,
  });

  async getPageViewsByUrl(url: string) {

    try {

      const res = await this.analyticsReporting.reports.batchGet({
        requestBody: {
          reportRequests: [
            {
              viewId: CONSTANTS.GOOGLE_ANALYTICS_VIEW_ID,
              dimensions: [{
                name: 'ga:pagePath',
              }],
              metrics: [
                {
                  expression: 'ga:pageviews',
                },
              ],
              dimensionFilterClauses: [
                {
                  filters: [
                    {
                      operator: 'EXACT',
                      dimensionName: 'ga:pagePath',
                      expressions: [
                        url,
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      );
      return res.data.reports[0].data.totals[0].values[0];
    } catch (error) {
      handleException('getPageViewsByUrl', error, null, false);
      return 'NA';
    }
  }
}

export const googleAnalytics = new GoogleAnalytics();
