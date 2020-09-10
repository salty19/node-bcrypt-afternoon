const bcrypt = require('bcryptjs')

modeul.exports = {

    register: async (req, res) => {
        const {username, password, isAdmin} = req.body
        const db = req.app.get('db')

        const result = await db.get_user([username])
        const existingUser = result[0]

        if(existingUser[0]) {
            return res.status(409).send('Username taken.')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        

    }

}