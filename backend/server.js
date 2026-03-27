const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Example endpoint for spinning the wheel
app.post('/api/spin', (req, res) => {
  // Here you would add logic to check user, birthday, etc.
  // For now, return a random prize
  const prizes = [
    'Gift Card',
    'Movie Tickets',
    'Extra Day Off',
    'Lunch Coupon',
    'Coffee Mug',
    'Headphones',
    'T-Shirt',
    'Jackpot!'
  ];
  const prizeIndex = Math.floor(Math.random() * prizes.length);
  res.json({ prize: prizes[prizeIndex] });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
