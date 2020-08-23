# heroku-nodejs-example

## What do you need?

- Basic git knowledge.
- A nodejs application running.
- Heroku Command Line Interface (CLI)

## Installation guide

### Git

**Installing on Ubuntu**

You can install git by using `apt`:

```bash
$ sudo apt install git
```
**Installing on Windows**

You can install git using the installer:

### Nodejs

**Installing on Ubuntu**

If you don't have nodejs installed in your system, then you can install it using [nvm](https://github.com/nvm-sh/nvm) which is a nodejs version manager. You can it using either `curl` or `wget`:

```bash
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```
```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

**Note:** For more information about you can check https://github.com/nvm-sh/nvm

**Installing on Windows**

You can install nodejs in windows using the installer.

#### Verify versions

```bash
$ node --version
```
```bash
$ npm --version
```
```bash
$ git --version
```

**Note:** For windows hosts you can use `Git Bash` which is provided by git after you installed it.

### Heroku Command Line Interface (CLI)

**Installing on Ubuntu**

To install the CLI you need to use `snap`:

```bash
$ sudo snap install heroku --classic
```

**Installing on Windows**

Depending on your operating system version you can install the CLI by downloading the following installers:

- [64-bits](https://cli-assets.heroku.com/heroku-x64.exe)
- [32-bits](https://cli-assets.heroku.com/heroku-x86.exe)

## Basic Heroku commands

`heroku login` allows you to login using a CLI:
```
$ heroku login
heroku: Press any key to open up the browser to login or q to exit: 
Opening browser to https://cli-auth***
Logging in... done
Logged in as your@email.com
```
`heroku create` allows you to create a new project

`git push heroku master`

`heroku ps` allows you to check the status of your application.

`heroku open` opens your project on a new window.

`heroku logs --tail` allows you to check all the activity in the server regarding your applcation.