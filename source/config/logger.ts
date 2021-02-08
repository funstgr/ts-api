/* eslint-disable no-console */
const getTimeStamp = (): string => new Date().toISOString();

const info = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.log(`[${getTimeStamp()}][INFO] [${namespace}] ${message}`, object);
  } else {
    console.log(`[${getTimeStamp()}][INFO] [${namespace}] ${message}`, object);
  }
};

const warn = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.log(`[${getTimeStamp()}][WARN] [${namespace}] ${message}`, object);
  } else if (object) {
    console.log(`[${getTimeStamp()}][WARN] [${namespace}] ${message}`, object);
  }
};

const error = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.log(`[${getTimeStamp()}][ERROR] [${namespace}] ${message}`, object);
  } else if (object) {
    console.log(`[${getTimeStamp()}][ERROR] [${namespace}] ${message}`, object);
  }
};
const debug = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.log(`[${getTimeStamp()}][DEBUG] [${namespace}] ${message}`, object);
  } else if (object) {
    console.log(`[${getTimeStamp()}][DEBUG] [${namespace}] ${message}`, object);
  }
};

export default {
  info,
  warn,
  error,
  debug,
};
