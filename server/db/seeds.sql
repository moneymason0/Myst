

INSERT INTO reviews (id, user_id, recommended, review, helpfulCount, nonHelpfulCount, funnyCount, award, played, gotItFree, date)
VALUES ('true', 'Your biggest enemy in Half-Life isnt the aliens or the marines, the ladder physics', '176', '0', '55', '1', 'Clever, Poetry, Hilarious, Michaelangelo', 'true', 'false' '2023-03-15')

INSERT INTO reviews (id, user_id, recommended, review, helpfulCount, nonHelpfulCount, funnyCount, award, played, gotItFree, date)
VALUES ('true', 'There is a headcrab on my nuts please help', '103', '0', '119', 'Clever, Poetry, Heartwarming', 'true', 'true', '2023-03-07' );

INSERT INTO reviews (id, user_id, recommended, review, helpfulCount, nonHelpfulCount, funnyCount, award, played, gotItFree, date)
VALUES ('true', `GORDON YOU LOUSY ♥♥♥♥♥♥♥♥♥♥♥♥. GET YOUR DORK ASS DOWN TO THE TEST CHAMBER, OR I'LL SHOVE THE SAMPLE UP YOUR ASS! STOP ♥♥♥♥♥♥♥ WITH THE MICROWAVE!!!! (This game is so good, I have an original disc copy, as well as a Playstation 2 copy.)`, '43', '0', '25', 'Hilarious, Wholesome', 'true', 'true', '2023-03-08');

INSERT INTO reviews (id, user_id, recommended, review, helpfulCount, nonHelpfulCount, funnyCount, award, played, gotItFree, date);
VALUES ('true', 'i would like to thank my ex for the free game :)', '31', '0', '15', 'Wholesome', 'true', 'true', '2023-03-21')


INSERT INTO capabilities (id, singlePlayer, onlinePvP, steamCloud, antiCheat, phone, tablet, remoteTogether)
VALUES ('true', 'true', 'true', 'true', 'true', 'true', 'true');

INSERT INTO languages (id, name)
VALUES ('English', 'French', 'German', 'Italian', 'Spanish - Spain', 'Simplified Chinese', 'Traditional Chinese', 'Korean');

INSERT INTO Game (id, name, price, description, release, publisher_id, language_id, deckCompatable, capabilities_id, mainGenre, gameWebsite, metaCriticScore, discountPrecent, aboutThisGame)
VALUES ('Half-Life', '9.99', `Named Game of the Year by over 50 publications, Valve's debut title blends action and adventure with award-winning technology to create a frighteningly realistic world where players must think to survive. Also includes an exciting multiplayer mode that allows you to play against friends and enemies around the world.
`, 'Nov 8, 1998', 'true', 'action' 'https://steamcommunity.com/linkfilter/?url=http://www.half-life.com/', '96', '69', `Named Game of the Year by over 50 publications, Valve's debut title blends action and adventure with award-winning technology to create a frighteningly realistic world where players must think to survive. Also includes an exciting multiplayer mode that allows you to play against friends and enemies around the world.`);

INSERT INTO users (id, gamesOwned, name, reviewCount)
VALUES ('61', 'Where was medic TF2 in 1945?', '2');

INSERT INTO users (id, gamesOwned, name, reviewCount)
VALUES ('109', 'mashewcilk', '1');

INSERT INTO users (id, gamesOwned, name, reviewCount)
VALUES users ('164', 'Big green beetle', '20');

INSERT INTO users (id, gamesOwned, name, reviewCount)
VALUES ('61', 'ash!', '20');

INSERT INTO publisher (id, name, externalPage)
VALUES ('Valve', 'https://store.steampowered.com/publisher/valve?snr=1_5_9__2000');

INSERT INTO developer (id, name, externalPage)
VALUES ('Valve', 'https://store.steampowered.com/developer/valve?snr=1_5_9__2000');

INSERT INTO tags (id, name, game_id)
VALUES ('FPS, Sci-Fi, 1990s Multiplayer, Classic, Gore');

INSERT INTO mods (id, game_id, name)
VALUES ('Half-Life: MMod');

INSERT INTO mods (id, game_id, name)
VALUES ('Half-Life: Restored');

INSERT INTO mods (id, game_id, name)
VALUES ('Digital Paintball Redux'); 

INSERT INTO bundle (id, game_id, name, price, discountPercent, itemCount)
VALUES ('VALVE COMPLETE PACK', '65.70', '55', '22')

INSERT INTO bundle (id, game_id, name, price, discountPercent, itemCount)
VALUES ('HALF-LIFE COMPLETE', '36.52', '40','8');

INSERT INTO bundle (id, game_id, name, price, discountPercent, itemCount)
VALUES ('Buy Half-Life 1 Anthology BUNDLE', '13.71', '45', '4')