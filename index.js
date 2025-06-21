const express = require('express');
const axios = require('axios');
const app = express();

const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT || 3000;

app.get('/api/live', async (req, res) => {
  try {
    const response = await axios.get(`https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch live data" });
  }
});

app.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`);
});
