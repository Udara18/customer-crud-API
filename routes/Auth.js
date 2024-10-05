const express = require('express');
const passport = require('passport');
const router = express.Router();


router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/google/callback', passport.authenticate('google',{
    successRedirect: '/auth/google/success',
    failureRedirect: '/auth/google/failure'
}));


router.get('/logout', (req, resp) => {
    req.logout((err)=>{
        if (err) {
            return next(err);
        }
    });
    resp.redirect('/')
});


router.get('/google/success', (req, res) => {
    res.send('<h1>Login successful!</h1><br><a href="/auth/logout">logout</a>');
});

router.get('/google/failure', (req, res) => {
    res.send('Login failed. Please try again.');
});


module.exports = router;
