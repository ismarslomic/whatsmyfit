# whatsmy.fit
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4a91e5037d9a4d9fb9300885665c3e57)](https://www.codacy.com/app/ismarslomic/whatsmyfit?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ismarslomic/whatsmyfit&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/4a91e5037d9a4d9fb9300885665c3e57)](https://www.codacy.com/app/ismarslomic/whatsmyfit?utm_source=github.com&utm_medium=referral&utm_content=ismarslomic/whatsmyfit&utm_campaign=Badge_Coverage)
[![Build Status](https://travis-ci.org/ismarslomic/whatsmyfit.svg?branch=master)](https://travis-ci.org/ismarslomic/whatsmyfit)
[![dependencies Status](https://david-dm.org/ismarslomic/whatsmyfit/status.svg)](https://david-dm.org/ismarslomic/whatsmyfit)
[![devDependencies Status](https://david-dm.org/ismarslomic/whatsmyfit/dev-status.svg)](https://david-dm.org/ismarslomic/whatsmyfit?type=dev)
[![NSP Status](https://nodesecurity.io/orgs/ismarslomic/projects/d6c2cac7-23af-4da1-98d5-2b576d48fce1/badge)](https://nodesecurity.io/orgs/ismarslomic/projects/d6c2cac7-23af-4da1-98d5-2b576d48fce1)

> Whats my fit APIs

## Prerequisites
- Node + NPM + Yarn (`brew install yarn`)
- TSLint + Typescript (`yarn global add tslint typescript`)

## Install It
```bash
$ yarn install
```

## Run It
#### Run in *development* mode:

```bash
$ yarn dev
```

#### Run in *production* mode:

```bash
$ yarn compile
$ yarn start
```

### Try It
* Point you're browser to [http://localhost:3000](http://localhost:3000)
* Read API documentation with Swagger UI [http://localhost:3000/api-explorer/](http://localhost:3000/api-explorer/)

## Linting
```bash
$ yarn pretest
```

## Test It

```bash
$ yarn test
```

## Environments
- `test` - runs locally or on Heroku CI when executing `yarn test`
- `development` - runs locally when executing `yarn dev`, url: http://localhost:3000
- `staging` - runs in `staging` phase of Heroku Pipeline when pull requests are merged to `master` branch, when executing `yarn start`, url: https://staging.whatsmy.fit
- `production` - runs in `production` phase of Heroku Pipeline when `manually` promoted from staging, when executing `yarn start`, url: https://whatsmy.fit

## Skip CI jobs
Sometimes when pushing changes unrelated to application´s code it can be useful to avoid new CI builds. 
Commits that have `[ci skip]` or `[skip ci]` anywhere in the commit messages are ignored by Travis CI., read more at [TravisCI: Skipping a build](https://docs.travis-ci.com/user/customizing-the-build/#Skipping-a-build)

## Security
- TLS is enabled for `staging` and `production` environments by enabling TLS in Heroku. In addition ExpressJS server 
is configured to redirect all requests from HTTP to HTTPS, see [sslRedirect.ts](server/common/sslRedirect.ts), for these two environments
- NSP (Node Security Platform) checks automatically for security vulnerabilities of third-party packages, see `nsp` badge for latest status. In addition you can run nsp checks with `yarn check:nsp`

## Credits
This application was generated by use of [generator-express-no-stress-typescript](https://www.npmjs.com/package/generator-express-no-stress-typescript)