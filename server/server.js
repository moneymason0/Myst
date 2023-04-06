const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const pool = new Pool({
    user: 'postgres',
    host: 'db',
    database: 'mydb',
    password: 'password',
    port: 5432
})
app.get('/testing', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM test');
        res.status(200).json(rows);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'INTERNAL SERVER ERROR' });
    }
});


app.listen(3000, () => {
    console.log('Server listening on port 3000')
})