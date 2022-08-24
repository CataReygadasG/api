import { Router } from 'express'
const router = Router();

//import { getFotos, createVideo, updateFoto, deleteFoto } from './fotos.controller'
import * as fotoCtrl from './fotos.controller'
//obtener
router.get('/fotos', fotoCtrl.getFotos);
//de todas las fotos, uno por tan solo 1 id
router.get('/fotos/:id', fotoCtrl.getFoto);
//crear
router.post('/fotos', fotoCtrl.createFoto);

router.delete('/fotos/:id', fotoCtrl.deleteFoto);

router.put('/fotos/:id', fotoCtrl.updateFoto);

export default router