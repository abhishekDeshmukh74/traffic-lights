import { connect, connection, set, Error } from 'mongoose';

import { handleException } from './../error-handler';

export class MongoDB {

  constructor(dbUrl: string) {

    connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    set('useCreateIndex', true);
    set('debug', false);

    connection.on('error', (err: Error) => {
      handleException('MongoDB error', new Error(`Database connection error occurred :( ${err}`), null, false);
      process.exit(1);
    });

    connection.once('open', () => {
      console.log(`Successfully connected to database at ${dbUrl}`);
    });
  }
}
