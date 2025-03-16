const express = require('express');
const router = express.Router();
const userController = require('./userControllers');

router.get('/users', userController.getAllUsers);
router.get('/user/:id', userController.getUserById);
router.get('/users/:email', userController.getUserByEmail);
router.get('/cart/:email',userController.getcartitemByEmail);
router.get('/cart',userController.getcartitemByEmailAndImg);
router.post('/users', userController.createUser);
router.post('/cart',userController.createcartitem);
router.put('/cart',userController.updatecartitem);
router.delete('/cart',userController.deletecartitem)
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;