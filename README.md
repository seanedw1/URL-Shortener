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
  "olink": "http://bs.com/66vo7fl7ar8"
}
```

GET localhost:3000/api/v1/urls - get urls

```json

[
  {
    "id": 1,
    "olink": "http://www.exampleurl.com",
    "slink": "http://bs.com/66vo7fl7r8",
    "createdAt": "2016-10-02T22:19:27.000Z",
    "updatedAt": "2016-10-02T22:19:27.000Z",
    "userID": null
  },
  {
    "id": 2,
    "olink": "http://www.testurl1.com",
    "slink": "http://bs.com/66vo7fl7aq8",
    "createdAt": "2016-10-02T22:19:27.000Z",
    "updatedAt": "2016-10-02T22:19:27.000Z",
    "userID": null
  },
  {
    "id": 3,
    "olink": "http://www.exampleurl2.com",
    "slink": "http://bs.com/66vo7fliar8",
    "createdAt": "2016-10-02T22:19:27.000Z",
    "updatedAt": "2016-10-02T22:19:27.000Z",
    "userID": null
  }
]
```

GET localhost:3000/api/v1/urls/:id - get url by id

```json
{
  "id": 1,
  "olink": "http://www.exampleurl.com",
  "slink": "http://bs.com/66vo7fl7ar8",
  "createdAt": "2016-10-02T22:19:27.000Z",
  "updatedAt": "2016-10-02T22:19:27.000Z",
  "userID": null
}
```

POST localhost:3000/api/v1/urls/:id - update url

```json
  "olink": "http://www.example.com",
  "slink": "http://bs.com/66vo7fl7ar8",
```

DELETE localhost:3000/api/v1/urls/:id - delete user

```json
1
```
### Users

POST localhost:3000/api/v1/users - Create user

```json
{
  "URL": "http://bs.com/66vo7fl7ar8"
}
```

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

GET localhost:3000/api/v1/users/:id - get user by id

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

POST localhost:3000/api/v1/users/:id - update user

```json
{
  "name": "bart",
  "username": "simpsonsfan",
}
```

DELETE localhost:3000/api/v1/users/:id - delete user

```json
1
```

##### Contributors
[View Contributors](https://github.com/seanedw1/URL-Shortener/graphs/contributors)

###### Style Guide reference
[Airbnb](https://github.com/airbnb/javascript)
