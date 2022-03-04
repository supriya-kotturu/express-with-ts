"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRoutes_1 = require("./routes/loginRoutes");
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const path = require('path');
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/public', express_1.default.static(path.join(__dirname, '../public')));
app.use(loginRoutes_1.router).listen(3000, () => console.log('listening on 3000'));
