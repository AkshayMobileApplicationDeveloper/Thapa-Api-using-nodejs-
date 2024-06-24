const getllProducts = async (req, res) => {
    res.status(200).json({
        msg: "I am getllProducts"
    });
};

const getllProductsTesting = async (req, res) => {
    res.status(200).json({
        msg: "I am getllProductsTesting"
    });
};

module.exports = {
    getllProducts,
    getllProductsTesting
};
