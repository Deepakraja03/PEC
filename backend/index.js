const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const app = express();

app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true,
}));


app.use(express.json());

const port = 3000;

app.get('/api/distance-matrix', async (req, res) => {
  const { olat,olon, dlat, dlon } = req.query;

  try {
    const distanceMatrixResponse = await axios.get(`https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${olat},${olon}&destinations=${dlat},${dlon}&key=kDc5aAqcm7KQSIPV1G0G5Tuz4u36uq7tyFB4k9n8xhxdqfAoi0LwmZCq2cjoORXS`);
    const distanceMatrixData = distanceMatrixResponse.data;
    console.log(distanceMatrixData);

    res.json(distanceMatrixData);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});
