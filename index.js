const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes/index.route');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; 

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: false })); 

// Routes
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});