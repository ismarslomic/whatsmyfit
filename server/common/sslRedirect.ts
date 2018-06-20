// tslint:disable:brace-style

/**
 * Force load with https on production environment
 * https://devcenter.heroku.com/articles/http-routing#heroku-headers
 */
export default function () {
  const envs = ['staging', 'production'];

  return function (req, res, next) {
    if (envs.indexOf(process.env.NODE_ENV) >= 0) {
      const isHttps = req.secure;
      if (isHttps) {
        next();
      } else {
        redirectUrl(req, res);
      }
    }
    else {
      next();
    }
  };
}

const redirectUrl = function (req, res) {
  if (req.method === 'GET') {
    res.redirect(301, 'https://' + req.headers.host + req.originalUrl);
  } else {
    res.status(403).send('Please use HTTPS when submitting data to this server.');
  }
};
