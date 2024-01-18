// const { User } = require("../models");

class Controller {
    static async test( req, res) {
        try {
            res.status(200).json({ message : "success"})
        } catch (error) {
            res.status(400).json({error})
        }
    }
}

module.exports = Controller;