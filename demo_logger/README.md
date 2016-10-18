# Remer

[ ![codeship status for seanedw1/remer](https://codeship.com/projects/92c3f5c0-76cf-0134-e5f4-66667cc72310/status?branch=master)](https://app.codeship.com/projects/179698)


# Getting started

## Install package

To install package

```
npm i remer
```

### Usage

start your api in debug mode.

```
DEBUG=true node src/server
```
### Logging

remer will create and write to a log file on root level of application when enabled.Log will contain robust debugging information about your application.

### Debugging

write it in this format

debug excepts two params one for title and one for status.

status should be either succes or fail if undefined terminal will output magenta title

```
remer.debug('title goes here', 'status');
```

###Style Guide reference
[Airbnb](https://github.com/airbnb/javascript)

###Contributors
[View Contributors](https://github.com/seanedw1/remer/graphs/contributors)
