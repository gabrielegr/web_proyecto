var express = require('express');
var router = express.Router();
const LaboratoryController = require("../controllers/laboratory_controller");

router.get('/', LaboratoryController.getAll);
router.get('/:id', LaboratoryController.getOneById);

router.post('/', LaboratoryController.insert);

router.put('/', LaboratoryController.update);

router.delete('/', LaboratoryController.deleteById);

router.get('/panic/all',LaboratoryController.panic);
module.exports = router;