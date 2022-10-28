# DevObserver

## About
DevObserver is an open source app created for developers by developer. Main goal of the app is to bring the best
experience for the users. DevObserver will help everyone to stay tuned with the latest programming news, articles,
tutorials, trends, fun and much more.

While it may seem that DevObserver is opinionated, I, as a maintainer, am opened to the discussions about further
improvements and changes to make DevObserver even better and to attract new users.


## Contribution
Any kind of contribution is very welcomed. Just start conversation and let's see where we can go.


## Getting started
**Requirements:**
- node >=17.x
- docker >= 20.x

**Get Auth tokens for the authentication:**
- [Apple](https://github.com/ananay/passport-apple)
- [Github](https://github.com/cfsghost/passport-github)
- [Google](https://github.com/jaredhanson/passport-google-oauth2)
- [Twitter](https://github.com/jaredhanson/passport-twitter)

**Install dependencies:**
`shell
$ npm i
`

**Start databases:**
`shell
$ docker-compose up -d
`

**Run Database Migrations:**
`shell
$ npm run db:migrate
`

**Start all app:**
`shell
npm run dev
`

**Start each app separately:**
`shell
npm run dev:landing
npm run dev:app
npm run dev:extension
npm run dev:task-observer
`
