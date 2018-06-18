// tslint:disable:brace-style

/**
 * Force load with https on production environment
 * https://devcenter.heroku.com/articles/http-routing#heroku-headers
 */
export default function (environments?, status?) {
  const env = environments || ['production'];
  const httpStatus = status || 302;
  return function (req, res, next) {
    if (env.indexOf(process.env.NODE_ENV) >= 0) {
      if (req.headers['x-forwarded-proto'] !== 'https') {
        res.redirect(httpStatus, 'https://' + req.hostname + req.originalUrl);
      }
      else {
        next();
      }
    }
    else {
      next();
    }
  };
}
