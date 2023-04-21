INSERT INTO developer (name, externalPage) VALUES
    ('Valve', 'https://store.steampowered.com/developer/valve?snr=1_5_9__2000');

INSERT INTO publisher (name, externalPage) VALUES
    ('Valve', 'https://store.steampowered.com/publisher/valve?snr=1_5_9__2000');

INSERT INTO capabilities (singlePlayer, onlinePvP, steamCloud, antiCheat, phone, tablet, remoteTogether) VALUES
    ('true', 'true', 'true', 'true', 'true', 'true', 'true');

INSERT INTO game (name, price, description, release, developer_id, publisher_id,deckCompatable, capabilities_id, mainGenre, gameWebsite, metaCriticScore, discountPercent, aboutThisGame) VALUES
    ('Half-Life', 9.99, 'Named Game of the Year by over 50 publications, Valves debut title blends action and adventure with award-winning technology to create a frighteningly realistic world where players must think to survive. Also includes an exciting multiplayer mode that allows you to play against friends and enemies around the world.', 'Nov 8, 1998', 1, 1, 'true', 1, 'action', 'https://steamcommunity.com/linkfilter/?url=http://www.half-life.com/', 96, 69, 'Named Game of the Year by over 50 publications, Valves debut title blends action and adventure with award-winning technology to create a frighteningly realistic world where players must think to survive. Also includes an exciting multiplayer mode that allows you to play against friends and enemies around the world.');

INSERT INTO language (name) VALUES
    ('English'), 
    ('French'), 
    ('German'), 
    ('Italian'), 
    ('Spanish - Spain'), 
    ('Simplified Chinese'), 
    ('Traditional Chinese'), 
    ('Korean');

-- INSERT INTO users (gamesOwned, name, reviewCount) VALUES
--     (61, 'Where was medic TF2 in 1945?', 2),
--     (109, 'mashewcilk', 1),
--     (164, 'Big green beetle', 20),
--     (61, 'ash!', 20);

-- INSERT INTO reviews (user_id, recommended, review, game_id, helpfulCount, nonHelpfulCount, funnyCount, award, played, gotItFree, date) VALUES
--     (1, 'true', 'Your biggest enemy in Half-Life isnt the aliens or the marines, the ladder physics', 1, 176, 0, 55, 'Award', 'true', 'false', '2023-04-1'),
--     (2, 'true', 'There is a headcrab on my nuts please help', 1, 103, 0, 119, 'Award', 'true', 'true', '2023-04-1'),
--     (3, 'true', 'GORDON YOU LOUSY ♥♥♥♥♥♥♥♥♥♥♥♥. GET YOUR DORK ASS DOWN TO THE TEST CHAMBER, OR ILL SHOVE THE SAMPLE UP YOUR ASS! STOP ♥♥♥♥♥♥♥ WITH THE MICROWAVE!!!! (This game is so good, I have an original disc copy, as well as a Playstation 2 copy.)', 1, 43, 0, 25, 'Award', 'true', 'true', '2023-04-1'),
--     (4, 'true', 'i would like to thank my ex for the free game :)', 1, 31, 0, 15, 'Award', 'true', 'true', '2023-04-1');



