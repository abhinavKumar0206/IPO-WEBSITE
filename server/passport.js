const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const pool = require("../models/db");

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    const email = profile.emails[0].value;
    const name = profile.displayName;

    try {
      const userResult = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

      if (userResult.rows.length === 0) {
        const newUser = await pool.query(
          "INSERT INTO users (name, email, role) VALUES ($1, $2, 'user') RETURNING *",
          [name, email]
        );
        return done(null, newUser.rows[0]);
      }

      return done(null, userResult.rows[0]);
    } catch (err) {
      return done(err, null);
    }
  }
));

passport.serializeUser((user, done) => done(null, user.email));
passport.deserializeUser(async (email, done) => {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
  done(null, result.rows[0]);
});
