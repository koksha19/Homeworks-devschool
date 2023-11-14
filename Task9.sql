CREATE TABLE users(
    id  INT PRIMARY KEY,
    username TEXT UNIQUE NOT NULL ,
    email TEXT UNIQUE NOT NULL ,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    password TEXT NOT NULL
);
INSERT INTO users VALUES(1, 'levbereza', 'lev.bereza@gmail.com', 'Lev', 'Bereza', '1111');