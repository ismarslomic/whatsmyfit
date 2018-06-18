// tslint:disable:brace-style

/**
 * Force load with https on production environment
 * https://devcenter.heroku.com/articles/http-routing#heroku-headers
 */
export default function () {
  const envs = ['staging', 'production'];
  const redirectStatus = 302;
  return function (req, res, next) {
    if (envs.indexOf(process.env.NODE_ENV) >= 0) {
      if (req.headers['x-forwarded-proto'] !== 'https') {
        res.redirect(redirectStatus, 'https://' + req.hostname + req.originalUrl);
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
