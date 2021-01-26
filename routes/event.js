/*
    Rutas del Evento /Event

    host: /api/event

*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require ('../middlewares/validar-campos')
const { getEventos,crearEvento,actualizarEvento,eliminarEvento } = require ('../controllers/event');
const { validarJWT } = require('../middlewares/validar-jwt');
const { isDate } = require('../helpers/isDate');
const router = Router();

// Todas las rutas pasan por la validacion de JWT

router.use( validarJWT );

router.post('/', 
            [
                check('title','El titulo es obligatorio').not().isEmpty(),
                check('start','Fecha inicio obligatoria').custom( isDate ),
                check('end','Fecha fin obligatoria').custom( isDate ),
                validarCampos
            ],
            crearEvento);

router.put('/:id',actualizarEvento);

router.delete('/:id',eliminarEvento);

router.get('/',getEventos);
    

module.exports = router;