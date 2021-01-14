-- CREATE TABLE author (
--     id SERIAL PRIMARY KEY,
--     name varchar(25)
-- );

-- CREATE TABLE articles (
--     id SERIAL PRIMARY KEY,
--     title varchar(150),
--     author_id integer REFERENCES author(id)
-- );

-- INSERT INTO author VALUES
-- (DEFAULT, 'Adam'),
-- (DEFAULT, 'Andrea'),
-- (DEFAULT, 'Joe'),
-- (DEFAULT, 'Claude'),
-- (DEFAULT, 'Adam'),
-- (DEFAULT, 'Kanny'),
-- (DEFAULT, 'Kim'),
-- (DEFAULT, 'Matt R'),
-- (DEFAULT, 'Matt C'),
-- (DEFAULT, 'Zach'),
-- (DEFAULT, 'Ian'),
-- (DEFAULT, 'Jordan'),
-- (DEFAULT, 'Micah'),
-- (DEFAULT, 'Veronica'),
-- (DEFAULT, 'Ally'),
-- (DEFAULT, 'Matt P'),
-- (DEFAULT, 'Cedael');

-- INSERT INTO articles VALUES
-- (DEFAULT, 'JS Prototypes', 1),
-- (DEFAULT, 'JS Prototypes', 3),
-- (DEFAULT, 'Express Routes', 4),
-- (DEFAULT, 'Styling with Bootstrap', 3),
-- (DEFAULT, 'API calls with Google Maps', 7),
-- (DEFAULT, 'Python RPG Game', 7),
-- (DEFAULT, 'Nested for Loops', 7),
-- (DEFAULT, 'Object Oriented Programming in JS', 7),
-- (DEFAULT, 'Why I Went To A Coding Camp', 1),
-- (DEFAULT, 'Coding In Romanian', 1),
-- (DEFAULT, 'Fizz Buzz - The Solution', 2),
-- (DEFAULT, 'Merge Sort', 9),
-- (DEFAULT, 'Node.js Guide', 11),
-- (DEFAULT, 'Preparing for Technical Interviews', 15);

-- INSERT INTO articles VALUES
-- (DEFAULT, 'some other article', NULL);

-- SELECT articles.id, articles.title, author.name 
-- FROM articles
-- INNER JOIN author 
-- ON articles.author_id = author.id;

-- SELECT articles.id, articles.title, author.name 
-- FROM articles
-- FULL OUTER JOIN author 
-- ON articles.author_id = author.id;

-- SELECT articles.id, articles.title, author.name 
-- FROM articles
-- LEFT JOIN author 
-- ON articles.author_id = author.id;

-- SELECT articles.id, articles.title, author.name 
-- FROM articles
-- RIGHT JOIN author 
-- ON articles.author_id = author.id;

