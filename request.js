var request = require('request');

request.post('http://127.0.0.1:3000/api/users/').form({id: 'id', token: "token", geo: 'geo'});
