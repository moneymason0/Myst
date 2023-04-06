CREATE TABLE "reviews"(
    "id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "recomended" BOOLEAN NOT NULL,
    "review" VARCHAR(500) NOT NULL,
    "game_id" INTEGER NOT NULL,
    "helpfulCount" INTEGER NOT NULL,
    "nonHelpfulCount" INTEGER NOT NULL,
    "funnyCount" INTEGER NOT NULL,
    "award" VARCHAR(150) NOT NULL,
    "played" BOOLEAN NOT NULL,
    "gotItFree" BOOLEAN NOT NULL,
    "date" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL
);
ALTER TABLE
    "reviews" ADD PRIMARY KEY("id");
CREATE TABLE "capabilities"(
    "id" INTEGER NOT NULL,
    "singlePlayer" BOOLEAN NOT NULL,
    "onlinePvP" BOOLEAN NOT NULL,
    "steamCloud" BOOLEAN NOT NULL,
    "antiCheat" BOOLEAN NOT NULL,
    "phone" BOOLEAN NOT NULL,
    "tablet" BOOLEAN NOT NULL,
    "remoteTogether" BOOLEAN NOT NULL
);
ALTER TABLE
    "capabilities" ADD PRIMARY KEY("id");
CREATE TABLE "languages"(
    "id" BIGINT NOT NULL,
    "name" VARCHAR(100) NOT NULL
);
ALTER TABLE
    "languages" ADD PRIMARY KEY("id");
CREATE TABLE "Game"(
    "id" INTEGER NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "price" INTEGER NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "release" VARCHAR(100) NOT NULL,
    "developer_id" INTEGER NOT NULL,
    "publisher_id" INTEGER NOT NULL,
    "language_id" BIGINT NOT NULL,
    "deckCompatable" BOOLEAN NOT NULL,
    "capabilities_id" INTEGER NOT NULL,
    "mainGenre" VARCHAR(50) NOT NULL,
    "gameWebsite" VARCHAR(150) NOT NULL,
    "metaCriticScore" INTEGER NOT NULL,
    "discountPrecent" INTEGER NOT NULL,
    "aboutThisGame" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "Game" ADD PRIMARY KEY("id");
CREATE TABLE "users"(
    "id" INTEGER NOT NULL,
    "gamesOwned" INTEGER NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "reviewCount" INTEGER NOT NULL
);
ALTER TABLE
    "users" ADD PRIMARY KEY("id");
CREATE TABLE "publisher"(
    "id" INTEGER NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "externalPage" VARCHAR(150) NOT NULL
);
ALTER TABLE
    "publisher" ADD PRIMARY KEY("id");
CREATE TABLE "developer"(
    "id" INTEGER NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "externalPage" VARCHAR(150) NOT NULL
);
ALTER TABLE
    "developer" ADD PRIMARY KEY("id");
CREATE TABLE "tags"(
    "id" INTEGER NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "game_id" BIGINT NOT NULL
);
ALTER TABLE
    "tags" ADD PRIMARY KEY("id");
CREATE TABLE "mods"(
    "id" INTEGER NOT NULL,
    "game_id" INTEGER NOT NULL,
    "name" VARCHAR(150) NOT NULL
);
ALTER TABLE
    "mods" ADD PRIMARY KEY("id");
CREATE TABLE "bundle"(
    "id" INTEGER NOT NULL,
    "game_id" INTEGER NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "price" INTEGER NOT NULL,
    "discountPrecent" INTEGER NOT NULL,
    "itemCount" INTEGER NOT NULL
);
ALTER TABLE
    "bundle" ADD PRIMARY KEY("id");
ALTER TABLE
    "mods" ADD CONSTRAINT "mods_game_id_foreign" FOREIGN KEY("game_id") REFERENCES "Game"("id");
ALTER TABLE
    "reviews" ADD CONSTRAINT "reviews_game_id_foreign" FOREIGN KEY("game_id") REFERENCES "Game"("id");
ALTER TABLE
    "Game" ADD CONSTRAINT "game_developer_id_foreign" FOREIGN KEY("developer_id") REFERENCES "developer"("id");
ALTER TABLE
    "Game" ADD CONSTRAINT "game_language_id_foreign" FOREIGN KEY("language_id") REFERENCES "languages"("id");
ALTER TABLE
    "reviews" ADD CONSTRAINT "reviews_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");
ALTER TABLE
    "Game" ADD CONSTRAINT "game_publisher_id_foreign" FOREIGN KEY("publisher_id") REFERENCES "publisher"("id");
ALTER TABLE
    "Game" ADD CONSTRAINT "game_capabilities_id_foreign" FOREIGN KEY("capabilities_id") REFERENCES "capabilities"("id");
ALTER TABLE
    "bundle" ADD CONSTRAINT "bundle_game_id_foreign" FOREIGN KEY("game_id") REFERENCES "Game"("id");
ALTER TABLE
    "tags" ADD CONSTRAINT "tags_game_id_foreign" FOREIGN KEY("game_id") REFERENCES "Game"("id");