import fs from 'fs';

import * as production from 'environments/production';
import * as development from 'environments/development';

const env = process.env.NODE_ENV || 'development';

const getConfig = () => {
  return {
    host: '127.0.0.1',
    port: 3000,
    dbName: 'MoviesApi',
    mongoUrl: 'mongodb://localhost:27017/MoviesApi'
  };
};

export default getConfig();
