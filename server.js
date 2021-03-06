const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors')

const app = express()

// Connect Database
connectDB()

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors())

// Define routes for Contact Keeper app - contactKeeper
app.use('/contactKeeper/users', require('./routes/contactKeeper/users'));
app.use('/contactKeeper/auth', require('./routes/contactKeeper/auth'));
app.use('/contactKeeper/contacts', require('./routes/contactKeeper/contacts'));

// Define routes for IT Logger app - itLogger
app.use('/itLogger/logs', require('./routes/itLogger/logs'));
app.use('/itLogger/techs', require('./routes/itLogger/techs'));

// Define routes for Goal Seeker app - goalSeeker
app.use('/goalSeeker/users', require('./routes/goalSeeker/users'));
app.use('/goalSeeker/auth', require('./routes/goalSeeker/auth'));
app.use('/goalSeeker/dailyGoals', require('./routes/goalSeeker/dailyGoals'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`We got action - Server started on port ${PORT} - An ACTION1`));