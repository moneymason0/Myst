const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app1 = express();
app1.use(express.json());
app1.use(cors());

const app2 = express();
app2.use(express.json());
app2.use(cors());

const app3 = express();
app3.use(express.json());
app3.use(cors());

const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'mydb',
    password: 'password',
    port: 5432
});

// Handler method
const handler1 = num => (req,res)=>{
    const gameId = req.params.gameId;
    pool.query(
        'SELECT language.name FROM language INNER JOIN game_language ON language.language_id = game_language.language_id INNER JOIN game ON game.game_id = game_language.game_id WHERE game.game_id = $1',
        [gameId],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error retrieving languages for game');
            } else {
                const languageNames = result.rows.map(row => row.name);
                res.json(languageNames);
            }
        }
    );
}

const handler2 = num => (req,res)=>{
    const gameId = req.params.gameId;
    pool.query('SELECT * FROM game WHERE game_id = $1', [gameId])
        .then(result => {
            if (result.rows.length === 0) {
                res.status(404).send('Game not found');
            } else {
                const gameInfo = result.rows[0];
                res.send(gameInfo);
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Internal server error');
        });
}

const handler3 = num => (req,res)=>{
    const gameId = req.params.id;

    const query = `SELECT reviews.*, users.name, users.image, users.reviewCount, users.gamesOwned FROM reviews JOIN users ON reviews.user_id = users.user_id WHERE game_id=${gameId}`;
    pool.query(query, (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(results.rows);
        }
    });
}
 
app1.get('/games/:gameId/languages', handler1(1));
app1.get('/games/:gameId/gameInfo', handler2(1));
app1.get('/reviews/:id/users', handler3(1));

//------------------------------------------------------------------------------------------------------------------------------------------

app2.get('/games/:gameId/languages', handler1(2));
app2.get('/games/:gameId/gameInfo', handler2(2));
app2.get('/reviews/:id/users', handler3(2));

// --------------------------------------------------------------------------------------------------------------------------------------

app3.get('/games/:gameId/languages', handler1(2));
app3.get('/games/:gameId/gameInfo', handler2(2));
app3.get('/reviews/:id/users', handler3(2));

// --------------------------------------------------------------------------------------------------------------------------------------

app1.listen(3000, (err) => {
    err ?
    console.log("Failed to listen on PORT 3000"):
    console.log("Application Server listening on PORT 3000");
})

app2.listen(3001, (err) => {
    err ?
    console.log("Failed to listen on PORT 3001"):
    console.log("Application Server listening on PORT 3001");
})

app3.listen(3002, (err) => {
    err ?
    console.log("Failed to listen on PORT 3001"):
    console.log("Application Server listening on PORT 3001");
})