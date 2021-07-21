CREATE DATABASE IF NOT EXISTS upNext_db;
USE upNext_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS events;

-- Create the events table
CREATE TABLE events (
    id int NOT NULL AUTO_INCREMENT,
    event_name varchar(255) NOT NULL,
    imgName varchar(255) NOT NULL,
    imgAlt varchar(255) NOT NULL,
    event_date DATETIME NOT NULL,
    event_description varchar(1000) NOT NULL,
    PRIMARY KEY (id)
);

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS upNext;

-- Create the events table
CREATE TABLE upNext (
    id int NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    imgName varchar(255) NOT NULL,
    imgAlt varchar(255) NOT NULL,
    posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    summary varchar(255) NOT NULL,
    link varchar(225) NOT NULL,
    PRIMARY KEY (id)
);
