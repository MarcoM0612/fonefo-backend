
import { getAllAgeRanges, createAgeRange, updateAgeRange, deleteAgeRangeById } from '../controllers/ageranger.controller.mjs';

// routes nos sirve para definir los endpoints de una entidad
import {Router} from 'express'  //importando router de express
import { authUser } from '../middlewares/auth-user.middleware.mjs';
const router = Router();       //preparando router para definir rutas




router.get('/api/agerange', getAllAgeRanges);
router.post('/api/agerange', authUser,  createAgeRange);
router.patch('/api/agerange/:id', authUser, updateAgeRange);
router.delete('/api/agerange/:id', authUser, deleteAgeRangeById);

export default router;