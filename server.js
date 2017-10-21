//==>Declaration<==
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./src/dbconnection'); //reference of dbconnection.js
const citizen = require('./src/citizen');
const issue = require('./src/issue');
const journalist = require('./src/journalist');
const authority = require('./src/authority');
const alert = require('./src/alert');
const accessToken = "valleyforge:16740";
const app = express();
var Base64 = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function(e) {
            var t = "";
            var n, r, i, s, o, u, a;
            var f = 0;
            e = Base64._utf8_encode(e);
            while (f < e.length) {
                n = e.charCodeAt(f++);
                r = e.charCodeAt(f++);
                i = e.charCodeAt(f++);
                s = n >> 2;
                o = (n & 3) << 4 | r >> 4;
                u = (r & 15) << 2 | i >> 6;
                a = i & 63;
                if (isNaN(r)) { u = a = 64 } else if (isNaN(i)) { a = 64 }
                t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
            }
            return t
        },
        decode: function(e) {
            var t = "";
            var n, r, i;
            var s, o, u, a;
            var f = 0;
            e = e.replace(/[^A-Za-z0-9+/=]/g, "");
            while (f < e.length) {
                s = this._keyStr.indexOf(e.charAt(f++));
                o = this._keyStr.indexOf(e.charAt(f++));
                u = this._keyStr.indexOf(e.charAt(f++));
                a = this._keyStr.indexOf(e.charAt(f++));
                n = s << 2 | o >> 4;
                r = (o & 15) << 4 | u >> 2;
                i = (u & 3) << 6 | a;
                t = t + String.fromCharCode(n);
                if (u != 64) { t = t + String.fromCharCode(r) }
                if (a != 64) { t = t + String.fromCharCode(i) }
            }
            t = Base64._utf8_decode(t);
            return t
        },
        _utf8_encode: function(e) {
            e = e.replace(/rn/g, "n");
            var t = "";
            for (var n = 0; n < e.length; n++) {
                var r = e.charCodeAt(n);
                if (r < 128) { t += String.fromCharCode(r) } else if (r > 127 && r < 2048) {
                    t += String.fromCharCode(r >> 6 | 192);
                    t += String.fromCharCode(r & 63 | 128)
                } else {
                    t += String.fromCharCode(r >> 12 | 224);
                    t += String.fromCharCode(r >> 6 & 63 | 128);
                    t += String.fromCharCode(r & 63 | 128)
                }
            }
            return t
        },
        _utf8_decode: function(e) {
            var t = "";
            var n = 0;
            var r = c1 = c2 = 0;
            while (n < e.length) {
                r = e.charCodeAt(n);
                if (r < 128) {
                    t += String.fromCharCode(r);
                    n++
                } else if (r > 191 && r < 224) {
                    c2 = e.charCodeAt(n + 1);
                    t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                    n += 2
                } else {
                    c2 = e.charCodeAt(n + 1);
                    c3 = e.charCodeAt(n + 2);
                    t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                    n += 3
                }
            }
            return t
        }
    }
    //==>Declaration<==


//==>>middleware for authentication<<===
function auth(req, res, next) {
    var auth = req.get("Authorization");
    console.log("auth " + auth);
    if (auth ? Base64.decode(auth) : auth == accessToken) {
        console.log("yes");
        next();
    } else {
        console.log("no");
        var error = {
            errorCode: 401,
            errorMessage: 'Access denied due to inavlid access token'
        }
        res.send(error);
    }
}
//==>>middleware for authentication<<===

//==>auth middleware injection<==
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers,Authorization, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});
app.use(auth);
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//==>auth middleware injection<==



//==>for testing the server<==
app.get('/test', function(req, res) {
    res.send("testing");
});
//==>for testing the server<==

//==>Citizen<==

//list
app.get('/citizen/list', function(req, res) {
    citizen.list(function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//list

//readOne
app.get('/citizen/readOne', function(req, res) {
    var id = req.query.id;
    citizen.readOne(id, function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//readOne

//auth
app.get('/citizen/auth', function(req, res) {
    var email = req.query.email;
    var password = req.query.password;
    citizen.auth(email, password, function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//auth

//create
app.post('/citizen/create', function(req, res) {
    var obj = req.body;
    citizen.create(obj, function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//create

//delete
app.get('/citizen/delete', function(req, res) {
    var id = req.query.id;
    citizen.delete(id, function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//delete

//update
app.post('/citizen/update', function(req, res) {
    var obj = req.body;
    citizen.update(obj, function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//create

//==>Citizen<==

//==>Authority<==

//list
app.get('/authority/list', function(req, res) {
    authority.list(function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//list

//readOne
app.get('/authority/readOne', function(req, res) {
    var id = req.query.id;
    authority.readOne(id, function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//readOne

//auth
app.get('/authority/auth', function(req, res) {
    var email = req.query.email;
    var password = req.query.password;
    authority.auth(email, password, function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//auth

//create
app.post('/authority/create', function(req, res) {
    var obj = req.body;
    authority.create(obj, function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//create

//delete
app.get('/authority/delete', function(req, res) {
    var id = req.query.id;
    authority.delete(id, function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//delete

//update
app.post('/authority/update', function(req, res) {
    var obj = req.body;
    authority.update(obj, function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//create

//==>authority<==

//==>Journalist<==

//list
app.get('/journalist/list', function(req, res) {
    journalist.list(function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//list

//readOne
app.get('/journalist/readOne', function(req, res) {
    var id = req.query.id;
    journalist.readOne(id, function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//readOne

//auth
app.get('/journalist/auth', function(req, res) {
    var email = req.query.email;
    var password = req.query.password;
    journalist.auth(email, password, function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//auth

//create
app.post('/journalist/create', function(req, res) {
    var obj = req.body;
    journalist.create(obj, function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//create

//delete
app.get('/journalist/delete', function(req, res) {
    var id = req.query.id;
    journalist.delete(id, function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//delete

//update
app.post('/journalist/update', function(req, res) {
    var obj = req.body;
    journalist.update(obj, function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//create

//==>journalist<==

//==>alert<==

//list
app.get('/alert/list', function(req, res) {
    alert.list(function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//list

//readOne
app.get('/alert/readOne', function(req, res) {
    var id = req.query.id;
    alert.readOne(id, function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//readOne

//create
app.post('/alert/create', function(req, res) {
    var obj = req.body;
    alert.create(obj, function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//create

//delete
app.get('/alert/delete', function(req, res) {
    var id = req.query.id;
    alert.delete(id, function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//delete

//update
app.post('/alert/update', function(req, res) {
    var obj = req.body;
    alert.update(obj, function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//create

//==>alert<==

//==>issue<==

//list
app.get('/issue/list', function(req, res) {
    issue.list(function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//list

//readOne
app.get('/issue/readOne', function(req, res) {
    var id = req.query.id;
    issue.readOne(id, function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//readOne

//create
app.post('/issue/create', function(req, res) {
    var obj = req.body;
    issue.create(obj, function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//create

//delete
app.get('/issue/delete', function(req, res) {
    var id = req.query.id;
    issue.delete(id, function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//delete

//update
app.post('/issue/update', function(req, res) {
    var obj = req.body;
    issue.update(obj, function(err, rows) {
        if (err) { res.send(err); } else { res.send(rows); }
    });
});
//create

//==>issues<==


//==>server render<==
app.listen(process.env.PORT || 8090, function() {
    console.log('Example app listening on port 8090!')
});
//==>server render<==