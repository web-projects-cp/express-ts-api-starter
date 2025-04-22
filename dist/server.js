"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("./middlewares/logger"));
var errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
var user_1 = __importDefault(require("./routers/user"));
var products_1 = __importDefault(require("./routers/products"));
var app = (0, express_1.default)();
var port = 5050;
// Global middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(logger_1.default);
// Routers
app.use('/users', user_1.default);
app.use('/products', products_1.default);
// Error handling middleware
app.use(errorHandler_1.default.errorHandler404);
app.use(errorHandler_1.default.globalErrorHandler);
app.listen(port, function () { return console.log("App is listening on port ".concat(port)); });
