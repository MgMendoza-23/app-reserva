// index.js
import express from 'express';
import datosRoutes from './Datos.routes';
const router = express.Router();

router.use('/datos', datosRoutes);
export default router;
