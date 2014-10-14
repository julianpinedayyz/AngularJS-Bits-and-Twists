var express = require('express'),
    app = express();

//Express 3
//app.configure(function() {
//    app.use(express.static(__dirname, '/'));
//});

//Express 4
app.use(express.static(__dirname, '/'));

app.get('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = {};
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === customerId) {
           data = customers[i];
           break;
        }
    }
    res.json(data);
});

app.get('/customers', function(req, res) {
    res.json(customers);
    //res.json(500, { error: 'An error has occurred!' });
});

app.get('/orders', function(req, res) {
    var orders = [];
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].orders) {
            for (var j=0,ordersLen=customers[i].orders.length;j<ordersLen;j++) {
                orders.push(customers[i].orders[j]);
            }
        }
    }
    res.json(orders);
});

app.delete('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = { status: true };
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === customerId) {
           customers.splice(i,1);
           data = { status: true };
           break;
        }
    }
    res.json(data);
});

app.listen(8080);

console.log('Express listening on port 8080');

//This can be done with MongoDB. See the MEAN folder
var customers =[
            {
                id: 1,
                name: 'Jack',
                age: '23',
                joined: '2000-12-02',
                city: 'New York',
                orderTotal: 3.54,
                orders: [
                    {
                        id: 1,
                        product: 'Shoes',
                        total: 3.54
                    }
                ]
            },
            {
                id: 2,
                name: 'Malcom',
                age: '24',
                joined: '2013-06-22',
                city: 'San Francisco',
                orderTotal: 10,
                orders: [
                    {
                        id: 2,
                        product: 'Shirt',
                        total: 4.99
                    },
                    {
                        id: 3,
                        product: 'Pants',
                        total: 4.99
                    }
                ]
            },
            {
                id: 3,
                name: 'Peter',
                age: '22',
                joined: '2011-08-15',
                city: 'San Diego',
                orderTotal: 19.95,
                orders: [
                    {
                        id: 4,
                        product: 'Baseball',
                        total: 9.995
                    },
                    {
                        id: 5,
                        product: 'Bat',
                        total: 9.995
                    }
                ]
            },
            {
                id: 4,
                name: 'Lori',
                age: '32',
                joined: '2010-03-17',
                city: 'Chicago',
                orderTotal: 13.9997,
                orders: [
                    {
                        id: 6,
                        product: 'Cap',
                        total: 3.9997
                    },
                    {
                        id: 7,
                        product: 'Album',
                        total: 10
                    }
                ]
            }
        ];