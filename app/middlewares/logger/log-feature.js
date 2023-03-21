const logFeature = (req, res, next) => {
    console.log("Đây là danh sách học sinh");
    next();
}

module.exports = {
    logFeature,
};