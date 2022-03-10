"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requiredAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('You are not permitted');
}
var router = (0, express_1.Router)();
exports.router = router;
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requiredAuth, function (req, res) {
    res.send('Welcome, Authenticated User');
});
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send('You are now Logged in!');
    }
    else {
        res.send('You need to login =(');
    }
});
function post(routeName) {
    return function (target, key, desc) {
        router.post(routeName, target[key]);
    };
}
function use(middleware) {
    return function (target, key, desc) { };
}
