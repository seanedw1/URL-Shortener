# URL-Shortener

[ ![codeship status for seanedw1/URL-Shortener](https://codeship.com/projects/a4f6d2c0-739e-0134-dcf7-2221f4e2997e/status?branch=master)](https://app.codeship.com/projects/178965)

###### simplified URL shortener application

## Table of contents

* [Package dependencies](#package-dependencies)
* [ENV](#env)
* [Server](#server)
* [Unit Testing](#unit-testing)
* [Gulp](#gulp)
* [Vps](#virtual-private-server)
* [Workflow](#workflow)
* [Deployment](#deployment)
* [Endpoints](#endpoints)
* [contributors](#contributors)
* [Airbnb style guide](#style-guide-reference)


## Package dependencies

Install all dependencies.

```
npm install

npm install -g mocha gulp
```

## ENV

create a env.json on root level for database connection

```json
{
  "DB_NAME": "dbname",
  "DB_USER": "dbuser",
  "DB_PASS": "dbpass",
  "DB_HOST": "localhost",
  "DB_SCHEMA": "mysql",
  "DB_PORT": "3306"
}
```

## Server

start the server

```
node src/server
```

## Unit Testing

To run unit test.

*sever must be off

```
mocha

or

npm test
```
## Gulp

gulp is used to automate a github commit so first it adds all file changes followed by a commit message then a push to origin master.
to use this automated feature in terminal use

```
gulp
```

This project uses gulp for automated package.json version bump

```
// bump up major
gulp bump --major

// bump up minor
gulp bump --minor

// bump up minor
gulp bump --patch
```

## Virtual private server
API on virtual private server
[youtube](https://www.youtube.com/watch?v=Lw4nFTBkERI)

## Workflow

1 Create a new feature branch
```
git checkout -b branchname
```

2 Push up to new feature branch
```
git add -A
git commit -m 'insert your msg here'
git push
```
 if this is your first time pushing to a new remote branch run
```
git push --set-upstream origin branchname
```
3 Once commited we return to the master branch to merge (pull in) the feature branch
```
git checkout master
```
4 Now in the master branch merge your feature branch into your master branch using the merge command followed by a push
```
git merge branchname
git push
```
5 Now that we have successfully merged our feature branch our ci tool(codeship) will check to make sure our codebase is passing.

6 Once codeship confirms that the build passes we want to tag this version then merge our master into our release branch.

7 Create a tag run
```
git tag v1.0.6 commitidgoeshere
```

8 Once we have created our tag we want to continue with our merge to the release branch
```
git checkout release
git merge master
git push
```
9 Once we push to release branch our codebase enters the first phase of the Deployment pipeline

## Deployment

1. First we merge our codebase to master our ci test runs to confirm our codebase is passing our automated unit test.

2. If our codebase passes ci test (codeship) we manually merge master branch to the release branch
which is the first step in the deployment pipeline.

3. When ci tool (codeship) confirms the build is good it will automatically be deployed from release repo onto our staging server.

4. once completed and we confirmed out codebase is good we will manually push from staging server to production server.

## Endpoints

### Index
* [Hello world](#index-1)

### Status
* [Api Status](#status-1)

### crud for urls
* [create an url](#post-apiv1urls---create-shortened-link)
* [read all url](#get-apiv1urls---get-urls)
* [read url by id](#get-apiv1urlsid---get-url-by-id
)
* [redirect based upon the short URL provided](#get-goshorturl---redirect-based-upon-the-short-url-provided)
* [update url](#post-apiv1urlsid---update-url)
* [delete url](#delete-apiv1urlsid---delete-url)

### crud for users
* [create an user](#post-apiv1users---create-user)
* [read all user](#get-apiv1users---get-users)
* [read user by id](#get-apiv1usersid---get-user-by-id)
* [update user](#post-apiv1usersid---update-user)
* [delete user](#delete-apiv1usersid---delete-user)

### Index

##### GET / - index hello world

```json
{
  "hello": "world"
}
```
##### Status

#### GET /status - api status

```json
{
  "healty": true
}
```

### URL

#### POST /api/v1/urls - Create shortened link

* when creating new urls include http://

```json
{
  "url": "http://www.facebook.com/",
  "shortURL": "8q6rdltjrl",
}
```

#### GET /go/:shortURL - redirect based upon the short URL provided

```json
{}
```

#### GET /api/v1/urls - get urls

```json

[
  {
    "id": 1,
    "url": "www.facebook.com",
    "shortURL": "8q6rdltjrl",
    "updatedAt": "2016-10-04T22:07:39.000Z",
    "createdAt": "2016-10-04T22:07:39.000Z"
  },
  {
    "id": 2,
    "url": "http://www.testurl1.com",
    "shortURL": "66vo7fl7aq8",
    "createdAt": "2016-10-02T22:19:27.000Z",
    "updatedAt": "2016-10-02T22:19:27.000Z",
    "userID": null
  },
  {
    "id": 3,
    "url": "http://www.exampleurl2.com",
    "shortURL": "66vo7fliar8",
    "createdAt": "2016-10-02T22:19:27.000Z",
    "updatedAt": "2016-10-02T22:19:27.000Z",
    "userID": null
  }
]
```

#### GET /api/v1/urls/:id - get url by id

```json
{
  "id": 1,
  "url": "http://www.exampleurl.com",
  "shortURL": "66vo7fl7ar8",
  "createdAt": "2016-10-02T22:19:27.000Z",
  "updatedAt": "2016-10-02T22:19:27.000Z",
  "userID": null
}
```

#### POST /api/v1/urls/:id - update url

```json
  "url": "http://www.example.com",
  "shortURL": "66vo7fl7ar8",
```

#### DELETE /api/v1/urls/:id - delete url

```json
1
```

### Users

#### POST /api/v1/users - Create user

```json
{
  "name": "bart",
  "username": "simpsonsfan",
  "password": "testpass",

}
```

#### GET /api/v1/users - get users

```json

[
  {
    "id": 1,
    "name": "david",
    "username": "david12",
    "password": "reojgoifdklm",
    "createdAt": "2016-10-08T01:45:31.000Z",
    "updatedAt": "2016-10-08T01:45:31.000Z",
    "urls": []
  },
  {
    "id": 2,
    "name": "peter",
    "username": "peterpanman",
    "password": "reojgoifdklm",
    "createdAt": "2016-10-08T01:45:31.000Z",
    "updatedAt": "2016-10-08T01:45:31.000Z",
    "urls": []
  },
  {
    "id": 3,
    "name": "dan",
    "username": "dantheman",
    "password": "reojgoifdklm",
    "createdAt": "2016-10-08T01:45:31.000Z",
    "updatedAt": "2016-10-08T01:45:31.000Z",
    "urls": []
  }
]
```

#### GET /api/v1/users/:id - get user by id

```json
{
  "id": 3,
  "name": "dan",
  "username": "dantheman",
  "password": "reojgoifdklm",
  "tokenreq": "true",
  "createdAt": "2016-10-08T01:45:31.000Z",
  "updatedAt": "2016-10-08T01:45:31.000Z",
  "urls": []
}
```

#### POST /api/v1/users/:id - update user

```json
{
  "name": "bart",
  "username": "simpsonsfan",
}
```

#### DELETE /api/v1/users/:id - delete user

```json
1
```

##### Contributors
[View Contributors](https://github.com/seanedw1/URL-Shortener/graphs/contributors)

###### Style Guide reference
[Airbnb](https://github.com/airbnb/javascript)
