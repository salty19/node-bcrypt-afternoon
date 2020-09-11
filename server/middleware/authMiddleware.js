module.exports = {

    usersOnly: (req, res, next) => {
        // if (!req.session.user) {
        //     next()
        // } else {
        //     res.status(401).send('Please log in')
        // }
        if (!req.session.user) {
            res.status(401).send('Please log in')
        }
        next()
    },



}