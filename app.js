const express = require('express');
const path = require('path');
const app = express();
const data = require('./data/data.json');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/data', (req, res) => {
  res.json(data);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
