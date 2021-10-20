require('dotenv').config({ path: './config/.env' });
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is set and running on port: ${PORT}`);
});
