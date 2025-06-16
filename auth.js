const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const Person = require('./models/person');

passport.use(new localStrategy(async (username, password, done) => {
    try {
        console.log('Received Credentials:', username, password);
        const user = await Person.findOne({ username: username });
        if (!user) {
            return done(null, false, { message: 'Incorrect Username' });
        }

        // NOTE: Plaintext password comparison — use hashing (bcrypt) in production!
        const isPasswordMatch = await user.comparePassword(password);
        if (isPasswordMatch) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Incorrect Password' });
        }
    } catch (error) {
        return done(error);
    }
}));

module.exports = passport;