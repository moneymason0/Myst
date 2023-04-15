const { Pool } = require('pg');
const faker = require('faker');

const pool = new Pool({
    user: 'postgres',
    host: 'db',
    database: 'mydb',
    password: 'password',
    port: 5432,
});

const SEED_USERS_COUNT = 15000;
const SEED_REVIEWS_COUNT = 15000;

const seedUsers = async () => {
    const users = [];
    for (let i = 0; i < SEED_USERS_COUNT; i++) {
        users.push({
            name: faker.internet.userName(),
            gamesOwned: faker.datatype.number(),
            reviewCount: faker.datatype.number(),
        });
    }
    try {
        await pool.query('TRUNCATE TABLE users CASCADE');
        await pool.query('ALTER SEQUENCE users_user_id_seq RESTART WITH 1');
        const queryString =
            'INSERT INTO users (name, gamesOwned, reviewCount) VALUES ($1, $2, $3) RETURNING *';
        for (let i = 0; i < SEED_USERS_COUNT; i++) {
            const { name, gamesOwned, reviewCount } = users[i];
            await pool.query(queryString, [name, gamesOwned, reviewCount]);
        }
        console.log('Users seeded successfully!');
    } catch (error) {
        console.error('Error seeding users:', error);
    }
};

const seedReviews = async () => {
    const reviews = [];
    for (let i = 0; i < SEED_REVIEWS_COUNT; i++) {
        reviews.push({
            user_id: faker.datatype.number({ min: 1, max: SEED_USERS_COUNT }),
            recommended: faker.datatype.boolean(),
            review: faker.lorem.paragraph(),
            game_id: 1,
            helpfulCount: faker.datatype.number(),
            nonHelpfulCount: faker.datatype.number(),
            funnyCount: faker.datatype.number(),
            award: faker.lorem.words(),
            played: faker.datatype.boolean(),
            gotItFree: faker.datatype.boolean(),
        });
    }
    try {
        await pool.query('ALTER TABLE reviews DROP CONSTRAINT reviews_user_id_fkey');
        await pool.query('TRUNCATE TABLE reviews CASCADE');
        await pool.query('ALTER SEQUENCE reviews_reviews_id_seq RESTART WITH 1');
        await pool.query('ALTER TABLE reviews ADD CONSTRAINT reviews_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(user_id)');
        const queryString =
            'INSERT INTO reviews (user_id, recommended, review, game_id, helpfulCount, nonHelpfulCount, funnyCount, award, played, gotItFree) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *';
        for (let i = 0; i < SEED_REVIEWS_COUNT; i++) {
            const {
                user_id,
                recommended,
                review,
                game_id,
                helpfulCount,
                nonHelpfulCount,
                funnyCount,
                award,
                played,
                gotItFree,
            } = reviews[i];
            await pool.query(queryString, [
                user_id,
                recommended,
                review,
                game_id,
                helpfulCount,
                nonHelpfulCount,
                funnyCount,
                award,
                played,
                gotItFree,
            ]);
        }
        console.log('Reviews seeded successfully!');
    } catch (error) {
        console.error('Error seeding reviews:', error);
    }
};

seedUsers().then(() => seedReviews().then(() => pool.end()));

