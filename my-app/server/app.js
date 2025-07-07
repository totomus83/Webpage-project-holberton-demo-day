require('dotenv').config();
const express = require('express');
const app = express();
const newsletterRoutes = require('./routes/newsletterRoutes');
const healthRoutes = require('./routes/healthRoutes');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use('/api/newsletter', newsletterRoutes);
app.use('/api', healthRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
