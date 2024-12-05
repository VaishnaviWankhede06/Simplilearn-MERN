const express = require('express');
const router = express.Router();
const controller = require('../Controllers/index');

router.get('/', controller.getAllItems);


router.get('/GenerativeAi', controller.getAllGenerativeAi);

router.get('/GenerativeAi/:type', controller.GenerativeAiByType);

router.get('/CyberSecurity', controller.getAllCyberSecurity);


router.get('/CyberSecurity/:type', controller.CyberSecurityByType);

router.get('/machineLearning', controller.getAllmachineLearning);

router.get('/machineLearning/:type', controller.machineLearningByType);

module.exports = router;

