const GenerativeAilist = require('../Models/gnAi.json');
const CyberSecuritylist = require('../Models/cyber.json');
const machineLearninglist = require('../Models/ml.json');

exports.getAllItems = (req, res) => {
    res.status(200).json({
        GenerativeAi: GenerativeAilist,
        CyberSecuritylist: CyberSecuritylist,
        machineLearninglist: machineLearninglist,
    });
};

exports.getAllGenerativeAi = (req, res) => {
    res.status(200).json({ list: GenerativeAilist });
};

exports.getAllCyberSecurity = (req, res) => {
    res.status(200).json({ list: CyberSecuritylist});
};
exports.getAllmachineLearning = (req, res) => {
    res.status(200).json({ list:  machineLearninglist });
};

exports.GenerativeAiByType = (req, res) => {
    const GenerativeAiType = req.params.type.toLowerCase();
    const GenerativeAi = GenerativeAilist.filter(item => item.type.toLowerCase() === GenerativeAiType);

    if (GenerativeAi.length > 0) {
        res.status(200).json({ list: GenerativeAi });
    } else {
        res.status(404).json({
            message: "Please provide a valid shirt type",
        });
    }
};

exports.CyberSecurityByType = (req, res) => {
    const CyberSecurityType = req.params.type.toLowerCase();
    const CyberSecurityItem = CyberSecuritylist.filter(item => item.type.toLowerCase() === CyberSecurityType);

    if (CyberSecurityItem.length > 0) {
        res.status(200).json({ list: CyberSecurityItem });
    } else {
        res.status(404).json({
            message: "Please provide a valid electronics type",
        });
    }
};

exports.machineLearningByType = (req, res) => {
    const machineLearningType = req.params.type.toLowerCase();
    const machineLearningItem = machineLearninglist.filter(item => item.type.toLowerCase() === machineLearningType);

    if (machineLearningItem.length > 0) {
        res.status(200).json({ list: machineLearningItem });
    } else {
        res.status(404).json({
            message: "Please provide a valid mobile type",
        });
    }
};