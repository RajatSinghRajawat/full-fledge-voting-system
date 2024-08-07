const {z} = require('zod');
const { participantModel } = require("../models/participant.model");
0
const userZ = z.object({
    name:z.string(),
    email:z.string(),
    city:z.string(),
    state:z.string(),
    popularity:z.number(),
    name:z.number(),
})

const addparticipant = async (req, res) => {
    try {
        userZ.parse(req.body)
        const { name, email, age, popularity, city, state } = req.body;

        const partcipantAddusers = participantModel.create({
            name, email, city, state, popularity, age
        })
        res.send({ status: "true", partcipantAddusers })

    } catch (error) {
        return res.status(500).json({ status: "false", error: "Not found" });

    }

}

module.exports = {
    addparticipant
};
