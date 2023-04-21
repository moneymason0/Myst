CREATE TABLE IF NOT EXISTS  developer (
    developer_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    externalPage VARCHAR(150) NOT NULL
);

CREATE TABLE IF NOT EXISTS  publisher (
    publisher_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(100),
    externalPage VARCHAR(150)
);

CREATE TABLE IF NOT EXISTS  capabilities (
    capabilities_id SERIAL PRIMARY KEY NOT NULL,
    singlePlayer BOOLEAN NOT NULL,
    onlinePvP BOOLEAN NOT NULL,
    steamCloud BOOLEAN NOT NULL,
    antiCheat BOOLEAN NOT NULL,
    phone BOOLEAN NOT NULL,
    tablet BOOLEAN NOT NULL,
    remoteTogether BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS  game (
    game_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price INTEGER NOT NULL,
    description VARCHAR(500) NOT NULL,
    release VARCHAR(100) NOT NULL,
    developer_id INTEGER NOT NULL,
    publisher_id INTEGER NOT NULL,
    deckCompatable BOOLEAN NOT NULL,
    capabilities_id INTEGER NOT NULL,
    mainGenre VARCHAR(50) NOT NULL,
    gameWebsite VARCHAR(150) NOT NULL,
    metaCriticScore INTEGER NOT NULL,
    discountPercent INTEGER NOT NULL,
    aboutThisGame VARCHAR(500) NOT NULL,
    FOREIGN KEY (developer_id) REFERENCES developer(developer_id),
    FOREIGN KEY (publisher_id) REFERENCES publisher(publisher_id),
    FOREIGN KEY (capabilities_id) REFERENCES capabilities(capabilities_id)
);

CREATE TABLE IF NOT EXISTS  language (
    language_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS  game_language (
    id SERIAL PRIMARY KEY,
    game_id INTEGER NOT NULL,
    language_id INTEGER NOT NULL,
    FOREIGN KEY (game_id) REFERENCES game(game_id),
    FOREIGN KEY (language_id) REFERENCES language(language_id)
);

CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    gamesOwned INTEGER NOT NULL,
    name VARCHAR(50) NOT NULL,
    reviewCount INTEGER NOT NULL,
    image VARCHAR(150) NOT NULL
);

CREATE TABLE IF NOT EXISTS  reviews(
    reviews_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL ,
    recommended BOOLEAN NOT NULL,
    review VARCHAR(500) NOT NULL,
    game_id INTEGER NOT NULL,
    helpfulCount INTEGER NOT NULL,
    nonHelpfulCount INTEGER NOT NULL,
    funnyCount INTEGER NOT NULL,
    award VARCHAR(150) NOT NULL,
    played BOOLEAN NOT NULL,
    gotItFree BOOLEAN NOT NULL,
    created_at TIMESTAMP NOT NULL,
    hours_played INTEGER,
    FOREIGN KEY (game_id) REFERENCES game(game_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS  tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS  game_tags (
    id SERIAL PRIMARY KEY,
    tag_id INTEGER NOT NULL,
    game_id INTEGER NOT NULL,
    FOREIGN KEY (game_id) REFERENCES game(game_id),
    FOREIGN KEY (tag_id) REFERENCES tags(id)
);

CREATE TABLE IF NOT EXISTS  bundle (
    id SERIAL PRIMARY KEY,
    game_id INTEGER NOT NULL,
    name VARCHAR(150) NOT NULL,
    price INTEGER NOT NULL,
    discountPercent INTEGER NOT NULL,
    itemCount INTEGER NOT NULL,
    FOREIGN KEY (game_id) REFERENCES game(game_id)
);

CREATE TABLE IF NOT EXISTS mods (
    id SERIAL PRIMARY KEY,
    game_id INTEGER NOT NULL,
    name VARCHAR(150) NOT NULL,
    FOREIGN KEY (game_id) REFERENCES game(game_id)
);
