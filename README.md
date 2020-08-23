# heroku-nodejs-example

## What do you need?

- Basic git knowledge.
- A nodejs application running.
- Heroku Command Line Interface (CLI)

## Installation guide

### NVM (a nodejs version manager)

https://github.com/nvm-sh/nvm

This tutorial will work for any version of Node greater than 8 - check that it’s there:

node --version
npm --version
git --version

### Heroku Command Line Interface (CLI)

#### Ubuntu 16+

```bash
$ sudo snap install heroku --classic
```

#### Windows

- [64-bits](https://cli-assets.heroku.com/heroku-x64.exe)
- [32-bits](https://cli-assets.heroku.com/heroku-x86.exe)

## Login

Use the heroku login command to log in to the Heroku CLI:

```
heroku: Press any key to open up the browser to login or q to exit: 
Opening browser to https://cli-auth***
Logging in... done
Logged in as your@email.com
```
## Basic Heroku commands

heroku login
heroku create
git push heroku master
heroku ps:scale web=1\n
heroku open
heroku logs --tail