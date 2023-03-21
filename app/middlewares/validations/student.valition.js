const checkEmty = (req, res, next) => {
    const {fullName, age, numberClass} = req.body;
    if (fullName && age && numberClass) {
        next();
    }else{
        res.status(500).send("Không được để trống");
    }
};
const checkNumber = (req, res, next) => {
    const { numberClass } = req.body;
    if (numberClass >= 1 && numberClass <= 12) {
        next();
    } else {
        res.status(500).send("Không được để trống");
    }
};

module.exports = {
    checkEmty,
    checkNumber,
};