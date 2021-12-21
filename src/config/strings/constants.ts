export const CONSTANTS = {
  LOG_HEADER: 'M0rpheu5',
  CREATED_AT: 'created_at',
  UPDATED_AT: 'updated_at',
  GOOGLE_CLIENT_ID: '361894516073-ajj8ibs8q58aaiu60gf7ukdki4maensh.apps.googleusercontent.com',
  GOOGLE_CLIENT_SECRET: 'E4kCBuQ3wP3oparZQMct34Yu',
  GOOGLE_CLIENT_EMAIL: 'abhishek-deshmukh-pageviews@abhishek-deshmukh.iam.gserviceaccount.com',
  GOOGLE_ANALYTICS_VIEW_ID: '192095196',
  GOOGLE_PRIVATE_KEY:
    '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCzF4pI2uE9f49R\nspEvX2rn53BvN4OK9kbJO14Wtp9r51ZVB1Ia46uDV40OfnV17kb45m4m64FJgwTF\njPTJpnvYKpBxfdZyWggY8T8iOEj51PsImxk312cBd+uO+I+rfgM/3mPoGmpRDC05\nOxhDdiqlJdrwTK4aNvXCBZ+1H4QKHV6TWwNKry3YeYcRRtB5d8SaSVdWyTqvPhgV\n6hb/RKIdBJm5PHx7sMJQCIyDKnRY9xCd8/uwXglNArgDnwqZG2C2dETHdwOOWuWD\nJsO5YiAiRneb0JYW7R1PmQWA9UXcg996Wx41NMt+svAGyMlJFKPiSg/24/+NbJnA\nxbZNh6JvAgMBAAECggEANl+jxvnZX9wOLd46sTjVkuIUI1gl8ndSR39kUh4RKegb\nMIaf+XT9GkvnEir3y53T43bGo79lyeVi+f2RRnXq7NcDcsmjZaWLBtOb+O5AzcVJ\nkDPSxL770ZjQpmA18nm4T9hb2djHRaMeSd10wOqsCOcE4WdOhrwAAm/FrO6MHquI\n24bmyERY85Y/WuIN9hPupJ/gcRZ6FXpUZa4sSXUWIMw1RwAV0RV6mv8cmt1mbEd5\nzyDdejiL0xS9xSI8shcMfmbVVVns5RRtooBtIj9f2mOG4gYIdpDfxcWWcCoHcPfj\n/D3Oly7aikPMU2aYw/0P5LxdjNSFDr3OSAHVL3+M0QKBgQDhvALeeRTPKzhZTc0w\nXpF+Ha74V3otSayZsF4Q/3XUFdehAT9ybZDbsc0FECY2atSqXMV35vQeK86s8rEj\nJyNAnBQZISHZRKEPDKrY/xLpNkduAEXJPRK8MaaV4jcS5DPNQZB0YJgZY2csow80\nX3QzXtgMm63Q5idtMT9YuzrifwKBgQDLGpkA43JG2ZNAVx6MqBDibXdKj2ovM9yl\nMZs0pkM1UTij1uTpXFOPxFNmidwnhZmU+DDkxOQctPsJQpQxLPj16o/HI37hPDF4\nCmWCVnaVQGRT2zQ0x9//VyTzkD/5+VGINQzi9JWsq1Nl4+V6ZrfP3zigmez+7IDq\nsH+xKeVoEQKBgBy0mfDMmPbXWi0RFbzG6d2NzMhL53+G1OoeYXfr5IH53RfeXsEg\nacFmVNoF+bYF09FuRrY+qmCD1Z5splYADh2TO4MOkY1ditWtGLTLiw4ZFvBIHJfA\nqndAIR0CTVqbpnK9ma8S8YSY/W/RtIdGdDJsJzFDQtFD01OxZYrVFGHlAoGBAJ7T\n0+a/9vO03dQozLkODPYkyG7ELDNxiRCd9FN92XzuYS6utCBRlP8OdnHvSPyXG31F\ngWbFGeXhGZcqO50hICefIISIG4ajfcPzzWHZn64jxtFU0ESeMWsKiNj3azBeagXs\nBoHM5uc6q2M4jpHjlca3Nx9Qf+byp/XfxFuU+dMhAoGBAMKH4wkiX7Lz146mDuSk\nSbb0/1r6zRFQrASN28PGhuRM876MpPbIyvFvsT4DVMYV43zKETZY9lNzt+xGH5Vj\neg97jHd/U3woI5DPrPLsy8Oihv3jnf4wf4F1MyGBVs2fCIaQrOdRWeD7735irfBG\n1EIo2wMa+jT5Awwh93aVw9cI\n-----END PRIVATE KEY-----\n',
  SESSION_SECRET: 'H4ck1tB33ch',
  STATUS: {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
  },
  FILENAME: {
    LOG: {
      COMBINED: 'combined.log',
      EXCEPTIONS: 'exceptions.log',
    },
  },
  MESSAGES: {
    ERROR: {
      DEFAULT_TEXT: 'Error occurred',
      INVALID_JSON: 'Invalid JSON in request',
      PAYLOAD_SIZE_EXCEEDED: 'Request Payload size exceeded',
      TOKEN_REQUIRED: 'Authentication token is required!',
      INVALID_AUTH_TOKEN: 'Invalid Authentication token. Please request a new one',
      TOKEN_EXPIRED: 'Authentication token expired. Please request a new one',
      TOKEN_BEFORE_ACTIVE: 'Authentication token not active yet. Please request a new one',
      BLOGPOST_BOT_EXISTS: 'blogPost with given title does not exist',
    },
    COMMENT_UNLIKED: 'Comment unliked',
    COMMENT_UNDISLIKED: 'Comment undisliked',
    NO_POST_WITH_GIVEN_TITLE: 'No blog post found with given title',
    NOTIFICATIONS_SENT: 'Notifications sent successfully',
    NO_SUBSCRIBERS: 'No subscribers to send notifications',
    NO_NOTIFICATIONS: 'You have no notifications',
    API_WORKING: 'Abhishek Deshmukh API is working!',
    ENDPOINT_NOT_FOUND: 'Endpoint not found!',
    ALREADY_SUBSCRIBED: 'Already subscribed!',
  },
  ENUMS: {
    NOTIFICATION_EVENT: {
      LIKED: 'LIKED',
      DISLIKED: 'DISLIKED',
      COMMENTED: 'COMMENTED',
      NEW_POST_OUT: 'NEW_POST_OUT',
      NEW_FEATURE_OUT: 'NEW_FEATURE_OUT',
    },
  },
  SENTRY_DSN: 'https://3ec69ba81cf5453fad092719f5cf1119@o344628.ingest.sentry.io/1895746',
  BODY_PARSER_LIMIT: '1mb',
  JWT_SECRET: process.env.JWT_SECRET || 'T1ke1tBeetchwa123!',
  JWT_EXPIRY_TIME: '8h',
  ALLOWED_FILE_EXTENSIONS: ['jpeg', 'jpg', 'png', 'pdf'],
  MAX_FILE_SIZE_ALLOWED: 1024 * 1000 * 5, // 5 Mb
  RECORD_EXPIRES: 60 * 15 * 60,
  CURRENT_ENVIRONMENT: process.env.NODE_ENV || 'development',
  NOTIFICATIONS_ICON_PATH: 'assets/img/portrait_small.png',
  PAGINATION_LIMIT: 10,
  COMMENTS_LIMIT: 10,
  TRAFFIC_SIGNAL_CONFIG: [
    {
      color: 'RED',
      interval: 2,
    },
    {
      color: 'GREEN',
      interval: 3,
    },
    {
      color: 'YELLOW',
      interval: 4,
    },
  ],
};
