module.exports = {
    signUp: async (req, res, next) => {
        // email & password
        // req.value.body
        console.log('contents of req.value.body', req.value.body);
        console.log('UserController.signUp() called')
    },
    signIn: async (req, res, next) => {
        // generate token
        console.log('UserController.signIn() called')
    },
    secret: async (req, res, next) => {
        console.log('UserController.secret() called')
    }

}