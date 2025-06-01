// backend/server.js

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// Маршрут для поиска персонажей
app.get('/api/characters', async (req, res) => {
  const { name, page } = req.query;
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character', {
      params: { name, page }
    });
    return res.json(response.data);
  } catch (err) {
    if (err.response && err.response.status === 404) {
      return res.status(404).json({ error: 'Персонажей не найдено.' });
    }
    console.error('Ошибка при запросе к Rick and Morty API:', err.message);
    return res.status(500).json({ error: 'Серверная ошибка при запросе к внешнему API.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend запущен и слушает http://localhost:${PORT}`);
});