"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
const path = require('path');
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/pages/login/index.html'));
});
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    res.send('works!');
});
