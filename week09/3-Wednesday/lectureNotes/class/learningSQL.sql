-- DROP TABLE student;

-- CREATE TABLE student (
--     id SERIAL NOT NULL PRIMARY KEY,
--     name varchar NOT NULL,
--     website varchar,
--     github_username varchar,
--     points integer DEFAULT 0 CHECK (points >= 0),
--     gender char(1),
--     cohort_start_date date,
--     graduated boolean DEFAULT FALSE

-- );

-- INSERT INTO student (name, website, github_username, gender, cohort_start_date)
-- VALUES ('Veronica', 'veronica123.com', 'veronica.github', 'F', '2020-11-14')


-- INSERT INTO student VALUES 
-- (DEFAULT, 'Paul', 'pizzapather', 'paul.github', 0, 'M', '2017-04-17', TRUE),
-- (DEFAULT, 'Joe', 'pizzapather', 'joe.github', 6, 'M', '2017-04-17', FALSE),
-- (DEFAULT, 'Kanny', 'pizzapather', 'kanny.github', 11, 'F', '2017-04-17', FALSE),
-- (DEFAULT, 'Claude', 'pizzapather', 'claude.github', 6, 'M', '2017-04-17', TRUE),
-- (DEFAULT, 'Matt', 'pizzapather', 'matt.github', 11, 'M', '2017-04-17', FALSE);

-- INSERT INTO student (name, website, github_username, gender, cohort_start_date)
-- VALUES ('Ally', 'ally123.com', 'ally.github', 'F', '2020-11-14')

-- UPDATE student SET point = 8 WHERE id = 1;

-- UPDATE student SET name = 'Veronica' WHERE id = 1;

-- UPDATE student SET graduated = TRUE;

-- UPDATE student SET point = 99 , graduated = FALSE where id = 4;

-- DELETE FROM student;

-- DELETE FROM student WHERE id = 14;

-- SELECT * FROM student;

-- SELECT name, website FROM student;

-- SELECT name FROM student WHERE gender = 'F';

-- SELECT name FROM student WHERE gender = 'M';

-- SELECT name, points FROM student WHERE points >= 10;

-- SELECT name, points FROM student WHERE points >= 10 and gender = 'M';

-- SELECT * FROM student WHERE name like '%a%';

-- ALTER TABLE student ADD last_name varchar(15);

-- ALTER TABLE student ADD age integer DEFAULT 18;

-- ALTER TABLE student DROP COLUMN last_name;

-- ALTER TABLE student ALTER COLUMN website TYPE varchar(100);

-- SELECT COUNT (*) FROM student;

-- SELECT SUM(points) FROM student;

-- SELECT MAX(points) FROM student;

-- SELECT MIN(points) FROM student;

-- SELECT * FROM student ORDER BY points DESC;

-- SELECT name, points, gender FROM student ORDER BY gender, points;

-- SELECT * FROM student ORDER BY points LIMIT 5;

-- SELECT 8 FROM student ORDER BY points LIMIT 2 OFFSET 2;











