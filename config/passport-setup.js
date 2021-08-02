
const passport = require('passport');
const GoogleStrategy  = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../models/data');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});


passport.use(new GoogleStrategy({
    clientID: keys.google.clientId ,
    clientSecret: keys.google.clientSecret,
    callbackURL: "http://localhost:8080/employees/google/redirect"
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id }).then((currentUser)=>{
    console.log(profile,"profile")

        if(currentUser){
            console.log("user is: "+currentUser);
            done(null, currentUser);
        }else{
            new User({
                userName:profile.displayName,
                googleId:profile.id
            }).save().then((newUser)=>{
                console.log('new user created: '+newUser)
                done(null, newUser);
                
            })
        }

    })
  
   
  })
);