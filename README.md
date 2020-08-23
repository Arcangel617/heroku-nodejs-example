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
Opening browser to https://cli-auth.heroku.com/auth/cli/browser/66430bf8-5496-4857-8577-7dc28395d4b9?requestor=SFMyNTY.g3QAAAACZAAEZGF0YW0AAAANMTgxLjg0LjIyLjEwMGQABnNpZ25lZG4GACzZlxl0AQ.SG9QVtqoTQVJNgrPRe22wCbEUVSQkmvBZrzS2H5CVE0
Logging in... done
Logged in as artigue_arcangel@hotmail.com
```


heroku login
heroku create
git push heroku master
heroku ps:scale web=1\n
heroku open
heroku logs --tail