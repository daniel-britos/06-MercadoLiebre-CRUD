// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index);  // usamos get por quequeremos ver todos los productos

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); //usamos post por que queremos cargar/traer el formulario
router.post('/create', productsController.store);  //usamos post por que queremos enviar el formulario

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', productsController.detail); //usamos get por que queremos traer(get) un producto

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit);  //usamos get por que queremos traer(get) un producto
router.put('/upload/:id', productsController.update); //usamos put por que queremos edita run producto

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); // usamos delete por que queremos borrar un producto


module.exports = router;

