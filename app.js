const express = require('express');
const animalRoutes = require('./routes/animalRoutes');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// API Routes
app.use('/api', animalRoutes);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});