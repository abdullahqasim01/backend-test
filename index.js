const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    const message = process.env.MESSAGE;
    res.send('Hello from backend1! ' + message);
});

app.listen(3000, () => {
    console.log(`Backend1 listening on port 3000`);
})