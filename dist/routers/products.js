"use strict";
// import express from 'express'
// const router = express.Router()
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const prodcuts = [
//   {
//     id: 1,
//     user: '1',
//   },
//   {
//     id: 2,
//     user: '2',
//   },
//   {
//     id: 3,
//     user: '3',
//   },
// ]
// router.get('/', (req, res) => {
//   res.json({
//     status: 200,
//     user: prodcuts,
//   })
// })
// export default router
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var prodcuts = [
    {
        id: 1,
        user: '1',
    },
    {
        id: 2,
        user: '2',
    },
    {
        id: 3,
        user: '3',
    },
];
router.get('/', function (req, res) {
    res.json({
        status: 200,
        user: prodcuts,
    });
});
exports.default = router;
