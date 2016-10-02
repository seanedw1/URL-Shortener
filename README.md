# URL-Shortener

###### simplified URL shortener application

## Package dependencies

Install all dependencies.

```
npm i
```
## Server

to run the server

```
node src/server
```

## Endpoints

### Index

GET http://localhost:3000/ - index hello world

```json
{
  "hello": "world"
}
```
### Status

GET http://localhost:3000/status - api status

```json
{
  "healty": true
}
```

### URL

POST localhost:3000/api/v1/url - Create shortened link

```json
{
  "URL": "http://bs.com/66vo7fl7ar8"
}
```
### Users

GET localhost:3000/api/v1/users - get users

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

GET localhost:3000/api/v1/users/:id - get users by id

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

##### Contributors
[View Contributors](https://github.com/seanedw1/URL-Shortener/graphs/contributors)

###### Style Guide reference
[Airbnb](https://github.com/airbnb/javascript)
