"use strict";
// import express from 'express'
// const router = express.Router()
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const users = [
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
//     user: users,
//   })
// })
// router.get('/:userId', (req, res) => {
//   const userId = req.params.userId
//   console.log('userId:', userId)
//   const user = users.find((user) => user.id === Number(userId))
//   console.log('user:', user)
//   if (user) {
//     res.json({
//       status: 200,
//       user,
//     })
//   }
// })
// router.post('/', (req, res) => {
//   const user = req.body
//   console.log('user:', user)
//   res.json({
//     message: 'done',
//     user
//   })
// })
// router.put('/', (req, res) => {
//   res.send('/user PUT request')
// })
// router.delete('/', (req, res) => {
//   res.send('/user DELETE request')
// })
// export default router
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var users = [
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
        user: users,
    });
});
router.get('/:userId', function (req, res) {
    var userId = req.params.userId;
    console.log('userId:', userId);
    var user = users.find(function (user) { return user.id === Number(userId); });
    console.log('user:', user);
    if (user) {
        res.json({
            status: 200,
            user: user,
        });
    }
});
router.post('/', function (req, res) {
    var user = req.body;
    console.log('user:', user);
    res.json({
        message: 'done',
        user: user
    });
});
router.put('/', function (req, res) {
    res.send('/user PUT request');
});
router.delete('/', function (req, res) {
    res.send('/user DELETE request');
});
exports.default = router;
