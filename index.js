const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors()); // Allow all origins for testing
app.use(bodyParser.json());

app.post('/data', (req, res) => {
  // Handle the POST request
  console.log(req.body);
  res.status(200).json({ message: 'Expense added successfully' });
});

const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
