require('dotenv').config();
const express = require('express');
const app = express();
const newsletterRoutes = require('./routes/newsletterRoutes');

app.use(express.json());
app.use('/api/newsletter', newsletterRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
