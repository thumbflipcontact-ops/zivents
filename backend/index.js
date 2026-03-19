const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Dummy event
app.get('/api/events', (req, res) => {
  res.json([
    {
      id: '1',
      name: 'Fan Zone Paris',
      location: {
        latitude: 48.8566,
        longitude: 2.3522,
        city: 'Paris'
      },
      capacity: 1000,
      schedule: new Date().toISOString()
    }
  ]);
});

app.post('/api/events', (req, res) => {
  res.json({ success: true });
});

app.post('/api/auth/request-otp', (req, res) => {
  res.json({ success: true });
});

app.post('/api/auth/verify-otp', (req, res) => {
  res.json({ token: "dummy-token" });
});

app.listen(3000, () => console.log('Backend running on port 3000'));