const express = require('express');
const connectDB = require('./config/database');
const { check, validationResult } = require('express-validator/check');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routers/api/users'));
app.use('/api/auth', require('./routers/api/auth'));
app.use('/api/profile', require('./routers/api/profile'));
app.use('/api/posts', require('./routers/api/posts'));

const PORT = process.env.PORT || 1616;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
