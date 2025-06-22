const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
require('dotenv').config();
require('passport'); // Import passport strategies
const key=process.env.GOOGLE_CLIENT_SECRET;

const ipoRoutes = require('./routes/ipoRoutes');
const authRoutes = require('./routes/authRoutes'); // ✅ only once!

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Session for Google OAuth
app.use(session({
  secret: 'key',
  resave: false,
  saveUninitialized: false
}));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api', ipoRoutes);
app.use('/api/auth', authRoutes); // ✅ Only declare this once!
app.use('/api/ipo', ipoRoutes);

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
