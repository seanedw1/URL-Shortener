 const request = require('supertest');
 const util = require('../tools/util');

// array of all routes
 const routes = [
   {
     description: 'Index',
     route: '/',
     method: 'get',
   },
   {
     description: 'status',
     route: '/Status',
     method: 'get',
   },
   {
     description: 'Create a short url',
     route: 'api/v1/urls',
     method: 'post',
   },
   {
     description: 'Read all urls',
     route: 'api/v1/urls',
     method: 'get',
   },
   {
     description: 'Read url by id',
     route: 'api/v1/urls/:id',
     method: 'get',
   },
   {
     description: 'Redirect url',
     route: 'go/:shortURL',
     method: 'get',
   },
   {
     description: 'update a url',
     route: 'api/v1/urls/:id',
     method: 'post',
   },
   {
     description: 'delete a url',
     route: 'api/v1/urls/:id',
     method: 'delete',
   },
   {
     description: 'Create a user',
     route: 'api/v1/users',
     method: 'post',
   },
   {
     description: 'Read all users',
     route: 'api/v1/users',
     method: 'get',
   },
   {
     description: 'Read a user by id',
     route: 'api/v1/users/:id',
     method: 'get',
   },
   {
     description: 'Update a user',
     route: 'api/v1/users/:id',
     method: 'post',
   },
   {
     description: 'Delete a user',
     route: 'api/v1/users/:id',
     method: 'delete',
   },
 ];

 // routes
 describe('Routes', () => {
   let server;

 // before each instance
   beforeEach(() => {
     server = require('../src/server');
   });

 // after each instance
   afterEach(() => {
     server.close();
   });

 // loop through routes
   for (let i = 0; i < routes.length; i++) {
 // it statement gives description of what test is suppose to do
     it(routes[i].description, () => {
     // if methed is equal to get
       if (routes[i].method === 'get') {
         request(server)
         .get(routes[i])
         .set('Accept', 'application/json')
         .expect('Content-Type', /json/)
         .expect(200)
         .end();
         util.debug('sucess on get', 'sucess');
       } else if (routes[i].method === 'post') {
         request(server)
         .post(routes[i])
         .set('Accept', 'application/json')
         .expect('Content-Type', /json/)
         .expect(200)
         .end();
         util.debug('sucess on post', 'sucess');
       } else {
         request(server)
         .delete(routes[i])
         .set('Accept', 'application/json')
         .expect('Content-Type', /json/)
         .expect(200)
         .end();
         util.debug('sucess on delete', 'sucess');
       }
     // closing of the it statement
     });
   }
   // closing describe
 });
