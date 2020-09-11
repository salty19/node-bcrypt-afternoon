
module.exports = {

    dragonTreasure: async (req,res) => {
        const dragonTreasure = await req.app.get('db').get_dragon_treasure(1)

        return res.status(200).send(dragonTreasure)
    },
    
    getUserTreasure: async (req, res) => {
        const userTreasure = await req.app.get('db').get_user_treasure([req.session.user.id])

        return res.status(200).send(userTreasure)
    },

}