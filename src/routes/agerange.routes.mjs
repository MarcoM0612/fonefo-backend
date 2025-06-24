
import { getAllAgeRanges, createAgeRange, updateAgeRange, deleteAgeRangeById } from '../controllers/ageranger.controller.mjs';

// routes nos sirve para definir los endpoints de una entidad
import {Router} from 'express'  //importando router de express
const router = Router();       //preparando router para definir rutas




router.get('/api/agerange', getAllAgeRanges);
router.post('/api/agerange', createAgeRange);
router.put('/api/agerange/:id', updateAgeRange);
router.delete('/api/agerange/:id', deleteAgeRangeById);

export default router;