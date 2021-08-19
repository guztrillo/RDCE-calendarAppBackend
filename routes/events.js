/*
     Rutas de usuario / AUTH
     host + /api/events/
*/

const {Router} = require('express');
const {validarJWT} = require('../middlewares/validar-jwt');
const { check } = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos')
const {isDate} = require ('../helpers/isDate');
const { getEventos, crearEvento, actualizarEvento, borrarEvento} = require('../controllers/events');

const router = Router();
// todas pasan por la validación del token, depende de la posición para hacerlo condicional
router.use(validarJWT);


// Obtener eventos


router.get('/', getEventos)


// Crear evento
router.post(
     '/', 
     [
          check('title', 'El titulo es obligatorio').not().isEmpty(),
          check('start', 'Fecha de inicio es obligatoria').custom( isDate ),
          check('end', 'Fecha de finalizacion es obligatoria').custom( isDate ),
          validarCampos
     ],
     crearEvento
)


// actualizar evento

router.put('/:id', actualizarEvento)

// borrar evento

router.delete('/:id', borrarEvento)


module.exports = router