const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 8080;

const options = {
  origin: 'http://localhost:8081',
};

app.use(cors(options));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// simple route
app.get('/', (_req, res) => {
  res.json({ message: 'Fetched' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
