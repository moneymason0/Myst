const { Pool } = require('pg');
const faker = require('faker');

const pool = new Pool({
    user: 'postgres',
    host: 'db',
    database: 'mydb',
    password: 'password',
    port: 5432,
});

const SEED_USERS_COUNT = 120000;
const SEED_REVIEWS_COUNT = 75000;
const SEED_MODS_COUNT = 10000;
const SEED_DEVELOPER_COUNT = 4000;
const SEED_PUBLISHER_COUNT = 4000;
const SEED_CAPABILITIES_COUNT = 50;
const SEED_GAMES_COUNT = 5000;
const SEED_BUNDLES_COUNT = 1300;
const SEED_TAGS_COUNT = 35;

const seedUsers = async () => {
    const users = [];
    for (let i = 0; i < SEED_USERS_COUNT; i++) {
        users.push({
            name: faker.internet.userName(),
            gamesOwned: faker.datatype.number(),
            reviewCount: faker.datatype.number(),
            image: faker.image.image(500, 500, true)
        });
    }
    try {
        await pool.query('TRUNCATE TABLE users CASCADE');
        await pool.query('ALTER SEQUENCE users_user_id_seq RESTART WITH 1');
        const queryString =
            'INSERT INTO users (name, gamesOwned, reviewCount, image) VALUES ($1, $2, $3, $4) RETURNING *';
        for (let i = 0; i < SEED_USERS_COUNT; i++) {
            console.log(`seeded ${i} users!`)
            const { name, gamesOwned, reviewCount, image } = users[i];
            await pool.query(queryString, [name, gamesOwned, reviewCount, image]);
        }
        console.log('Users seeded successfully!');
    } catch (error) {
        console.error('Error seeding users:', error);
    }
};
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
const seedPublisher = async () => {
    const publisher = [];
    for (let i = 0; i < SEED_PUBLISHER_COUNT; i++) {
        publisher.push({
            name: faker.company.companyName(),
            externalPage: faker.internet.url(),
        });
    }
    try {
        await pool.query('TRUNCATE TABLE publisher CASCADE');
        await pool.query('ALTER SEQUENCE publisher_publisher_id_seq RESTART WITH 1');
        const queryString =
            'INSERT INTO publisher (name, externalPage) VALUES ($1, $2) RETURNING *';
        for (let i = 0; i < SEED_PUBLISHER_COUNT; i++) {
            console.log(`seeded ${i} publisher!`)
            const { name, externalPage } = publisher[i];
            await pool.query(queryString, [ name, externalPage ]);
        }
        console.log('Publisher seeded successfully!');
    } catch (error) {
        console.error('Error seeding publisher:', error);
    }
};

// -----------------------------------------------------------------------------------------------------------------------------------------------------------
const seedDeveloper = async () => {
    const developer = [];
    for (let i = 0; i < SEED_DEVELOPER_COUNT; i++) {
        developer.push({
            name: faker.company.companyName(),
            externalPage: faker.internet.url(),
        });
    }
    try {
        await pool.query('TRUNCATE TABLE developer CASCADE');
        await pool.query('ALTER SEQUENCE developer_developer_id_seq RESTART WITH 1');
        const queryString =
            'INSERT INTO developer (name, externalPage) VALUES ($1, $2) RETURNING *';
        for (let i = 0; i < SEED_DEVELOPER_COUNT; i++) {
            console.log(`seeded ${i} developer!`)
            const { name, externalPage } = developer[i];
            await pool.query(queryString, [ name, externalPage ]);
        }
        console.log('Developer seeded successfully!');
    } catch (error) {
        console.error('Error seeding developer:', error);
    }
};
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
const seedCapabilities = async () => {
    const capabilities = [];
    for (let i = 0; i < SEED_CAPABILITIES_COUNT; i++) {
        capabilities.push({
            singleplayer: faker.datatype.boolean(),
            onlinepvp: faker.datatype.boolean(),
            steamcloud: faker.datatype.boolean(),
            anticheat: faker.datatype.boolean(),
            phone: faker.datatype.boolean(),
            tablet: faker.datatype.boolean(),
            remotetogether: faker.datatype.boolean()
        });
    }
    try {
        await pool.query('TRUNCATE TABLE capabilities CASCADE');
        await pool.query('ALTER SEQUENCE capabilities_capabilities_id_seq RESTART WITH 1');
        const queryString =
            'INSERT INTO capabilities (singleplayer, onlinepvp, steamcloud, anticheat, phone, tablet, remotetogether) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
        for (let i = 0; i < SEED_CAPABILITIES_COUNT; i++) {
            console.log(`seeded ${i} capabilities!`)
            const { singleplayer, onlinepvp, steamcloud, anticheat, phone, tablet, remotetogether} = capabilities[i];
            await pool.query(queryString, [ singleplayer, onlinepvp, steamcloud, anticheat, phone, tablet, remotetogether ]);
        }
        console.log('Capabilities seeded successfully!');
    } catch (error) {
        console.error('Error seeding Capabilities:', error);
    }
};
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
const seedTags = async () => {
    const tags = [];
    for (let i = 0; i < SEED_TAGS_COUNT; i++) {
        tags.push({
            name: faker.lorem.sentence(1)
        });
    }
    try {
        await pool.query('TRUNCATE TABLE tags CASCADE');
        await pool.query('ALTER SEQUENCE tags_id_seq RESTART WITH 1');
        const queryString =
            'INSERT INTO tags ( name ) VALUES ($1) RETURNING *';
        for (let i = 0; i < SEED_TAGS_COUNT; i++) {
            console.log(`seeded ${i} tags!`)
            const { name } = tags[i];
            await pool.query(queryString, [ name ]);
        }
        console.log('Tags seeded successfully!');
    } catch (error) {
        console.error('Error seeding tags:', error);
    }
};
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
const seedGames = async () => {
    const games = [];
    for (let i = 0; i < SEED_GAMES_COUNT; i++) {
        games.push({
            name: faker.commerce.productAdjective(),
            price: faker.datatype.number({ min: 5, max: 80}),
            description: faker.company.catchPhrase(),
            release: faker.date.between('1990-01-01T00:00:00.000Z', '2023-01-01T00:00:00.000Z'),
            developer_id: faker.datatype.number({min: 1, max: SEED_DEVELOPER_COUNT}),
            publisher_id: faker.datatype.number({min: 1, max: SEED_PUBLISHER_COUNT}),
            deckcompatable: faker.datatype.boolean(),
            capabilities_id: faker.datatype.number({min: 1, max: SEED_CAPABILITIES_COUNT}),
            mainGenre: faker.commerce.department(),
            gameWebsite: faker.internet.url(),
            metaCriticScore: faker.datatype.number({min: 1, max: 100}),
            discountPercent: faker.datatype.number({min: 5, max: 70}),
            aboutThisGame: faker.lorem.sentence(10)
        });
    }
    try {
        await pool.query('TRUNCATE TABLE game CASCADE');
        await pool.query('ALTER SEQUENCE game_game_id_seq RESTART WITH 1');
        const queryString =
            'INSERT INTO game (name, price, description, release, developer_id, publisher_id, deckcompatable, capabilities_id, maingenre, gamewebsite, metacriticscore, discountpercent, aboutthisgame) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *';
        for (let i = 0; i < SEED_GAMES_COUNT; i++) {
            console.log(`seeded ${i} games!`)
            const { name, price, description, release, developer_id, publisher_id, deckcompatable, capabilities_id, mainGenre, gameWebsite, metaCriticScore, discountPercent, aboutThisGame} = games[i];
            await pool.query(queryString, [ name, price, description, release, developer_id, publisher_id, deckcompatable, capabilities_id, mainGenre, gameWebsite, metaCriticScore, discountPercent, aboutThisGame ]);
        }
        console.log('Games seeded successfully!');
    } catch (error) {
        console.error('Error seeding Games:', error);
    }
};
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
const seedReviews = async () => {
    const reviews = [];
    const startDate = new Date(2012, 0, 1); // January 1st, 2012
    const endDate = new Date(2023, 3, 30); // April 30th, 2023
    for (let i = 0; i < SEED_REVIEWS_COUNT; i++) {
        reviews.push({
            user_id: faker.datatype.number({ min: 1, max: SEED_USERS_COUNT }),
            recommended: faker.datatype.boolean(),
            review: faker.lorem.paragraph(),
            game_id: faker.datatype.number({ min: 1, max: SEED_GAMES_COUNT }),
            helpfulCount: faker.datatype.number(),
            nonHelpfulCount: faker.datatype.number(),
            funnyCount: faker.datatype.number(),
            award: faker.lorem.words(),
            played: faker.datatype.boolean(),
            gotItFree: faker.datatype.boolean(),
            createdAt: faker.date.between(startDate, endDate),
            hoursPlayed: faker.datatype.number()
        });
    }
    try {
        await pool.query('TRUNCATE TABLE reviews CASCADE');
        await pool.query('ALTER SEQUENCE reviews_reviews_id_seq RESTART WITH 1');
        const queryString =
            'INSERT INTO reviews (user_id, recommended, review, game_id, helpfulCount, nonHelpfulCount, funnyCount, award, played, gotItFree, created_at, hours_played) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *';

        for (let i = 0; i < SEED_REVIEWS_COUNT; i++) {
            console.log(`seeded ${i} reviews!`)
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
                createdAt,
                hoursPlayed,
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
                createdAt,
                hoursPlayed,
            ]);
        }
        console.log('Reviews seeded successfully!');
    } catch (error) {
        console.error('Error seeding reviews:', error);
    }
};
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
const seedMods = async () => {
    const mods = [];
    for (let i = 0; i < SEED_MODS_COUNT; i++) {
        mods.push({
            gamesId: faker.datatype.number({ min: 1, max: SEED_GAMES_COUNT }),
            name: faker.lorem.sentence(5)
        });
    }
    try {
        await pool.query('TRUNCATE TABLE mods CASCADE');
        await pool.query('ALTER SEQUENCE mods_id_seq RESTART WITH 1');
        const queryString =
            'INSERT INTO mods (game_id, name) VALUES ($1, $2) RETURNING *';
        for (let i = 0; i < SEED_MODS_COUNT; i++) {
            console.log(`seeded ${i} mods!`)
            const { gamesId, name} = mods[i];
            await pool.query(queryString, [ gamesId, name ]);
        }
        console.log('Mods seeded successfully!');
    } catch (error) {
        console.error('Error seeding mods:', error);
    }
};
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
const seedGameLanguage = async () => {
    const gameLanguage = [];
    for (let i = 0; i < SEED_GAMES_COUNT; i++) {
        gameLanguage.push({
            gamesId: faker.datatype.number({ min: 1, max: SEED_GAMES_COUNT }),
            languageId: faker.datatype.number({ min: 1, max: 8 })
        });
    }
    try {
        await pool.query('TRUNCATE TABLE game_language CASCADE');
        await pool.query('ALTER SEQUENCE game_language_id_seq RESTART WITH 1');
        const queryString =
            'INSERT INTO game_language (game_id, language_id) VALUES ($1, $2) RETURNING *';
        for (let i = 0; i < SEED_GAMES_COUNT; i++) {
            console.log(`seeded ${i} game_language!`)
            const { gamesId, languageId} = gameLanguage[i];
            await pool.query(queryString, [ gamesId, languageId ]);
        }
        console.log('Game_Language seeded successfully!');
    } catch (error) {
        console.error('Error seeding game_language:', error);
    }
};

// -----------------------------------------------------------------------------------------------------------------------------------------------------------
const seedGameTags= async () => {
    const gameTags = [];
    for (let i = 0; i < SEED_GAMES_COUNT; i++) {
        gameTags.push({
            gamesId: faker.datatype.number({ min: 1, max: SEED_GAMES_COUNT }),
            tagsId: faker.datatype.number({ min: 1, max: SEED_TAGS_COUNT })
        });
    }
    try {
        await pool.query('TRUNCATE TABLE game_tags CASCADE');
        await pool.query('ALTER SEQUENCE game_tags_id_seq RESTART WITH 1');
        const queryString =
            'INSERT INTO game_tags (game_id, tag_id) VALUES ($1, $2) RETURNING *';
        for (let i = 0; i < SEED_GAMES_COUNT; i++) {
            console.log(`seeded ${i} game_tags!`)
            const { gamesId, tagsId} = gameTags[i];
            await pool.query(queryString, [ gamesId, tagsId ]);
        }
        console.log('Game_Tags seeded successfully!');
    } catch (error) {
        console.error('Error seeding game_tags:', error);
    }
};
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
const seedBundles = async () => {
    const bundles = [];
    for (let i = 0; i < SEED_BUNDLES_COUNT; i++) {
        bundles.push({
            gamesId: faker.datatype.number({ min: 1, max: SEED_GAMES_COUNT }),
            name: faker.lorem.sentence(3), 
            price: faker.datatype.number({ min: 5, max: 100 }),
            discountpercent: faker.datatype.number({ min: 1, max: 80 }),
            itemcount: faker.datatype.number({ min: 1, max: 10})
        });
    }
    try {
        await pool.query('TRUNCATE TABLE bundle CASCADE');
        await pool.query('ALTER SEQUENCE bundle_id_seq RESTART WITH 1');
        const queryString =
            'INSERT INTO bundle (game_id, name, price, discountpercent, itemcount) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        for (let i = 0; i < SEED_BUNDLES_COUNT; i++) {
            console.log(`seeded ${i} bundles!`)
            const { gamesId, name, price, discountpercent, itemcount } = bundles[i];
            await pool.query(queryString, [ gamesId, name, price, discountpercent, itemcount]);
        }
        console.log('Bundles seeded successfully!');
    } catch (error) {
        console.error('Error seeding bundles:', error);
    }
};

seedUsers().then(   
    () => seedPublisher().then(
        () => seedDeveloper().then(    
            () => seedCapabilities().then(  
                () => seedTags().then(     
                    () => seedGames().then(
                        () => seedReviews().then(
                            () => seedMods().then(
                                () => seedGameLanguage().then(
                                    () => seedGameTags().then(
                                        () => seedBundles().then(                                            
                                                () => pool.end()
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    )
);

