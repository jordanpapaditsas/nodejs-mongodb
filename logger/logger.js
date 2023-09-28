const { format, createLogger, transports } = require('winston');

require('winston-daily-rotate-file');   // No need to declare the libraries into variables, the app reads them and access them automatically.
require('winston-mongodb');
require('dotenv').config();

const { combine, timestamp, label, prettyPrint } = format;

const CATEGORY = 'Winston custom format';

const fileRotateTransport = new transports.DailyRotateFile({
  filename: 'logs/rotate-%DATE%.log',
  datePattern: 'DD-MM-YYYY',
  maxFiles: '14d'
});

const logger = createLogger({
  level: 'debug',
  format: combine(
    label({ label: CATEGORY }),
    timestamp({
      format: 'DD-MM-YYYY HH:mm:ss'
    }),
    // format.json() // Makes the log to be visible in a single line like a json file.
    prettyPrint()   // Makes the log better structured in console.
  ),
  transports: [
    fileRotateTransport,
    new transports.File({ 
      filename: 'logs/test.log'
    }),
    new transports.File({
      level: 'error',
      filename: 'logs/error.log'
    }),
    new transports.Console(),
    new transports.MongoDB({
      level: 'error',
      db: process.env.MONGODB_URI,
      options: {
        useUnifiedTopology: true    // To remove the message of information from MongoDB, about having an older driver in Winston Library.
      },
      collection: 'server_logs',
      format: format.combine(
        format.timestamp(),
        format.json()
      )
    })
  ] 
});

module.exports = logger;