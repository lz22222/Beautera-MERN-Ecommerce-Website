require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRouter = require('./src/users/user.route')

app.use(express.json({ limit: '25mb' }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use('/api/auth', authRouter)



async function main() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('MongoDB is successfully connected.');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
}

app.get('/', (req, res) => {
  res.send('Beautera is running');
});

main().then(() => {
  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
  });
});