const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const userSchema = require('../model/UserSchema');

passport.use(new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/callback",
        passReqToCallback: true
    },
    function(request,accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
));

passport.serializeUser((user,done)=>{
    done(null,user);
})
passport.deserializeUser(async (id,done)=>{
    done(null,id);
});