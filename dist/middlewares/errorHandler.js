"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler404(req, res, next) {
    res.status(404).json({
        status: 404,
        message: 'Page Not Found',
    });
}
function globalErrorHandler(err, req, res, next) {
    res.status(400).json({
        status: 400,
        message: 'Something wrong',
    });
}
exports.default = { globalErrorHandler: globalErrorHandler, errorHandler404: errorHandler404 };
