CREATE DATABASE IF NOT EXISTS events_db;
USE events_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS events;

-- Create the events table
CREATE TABLE events (
    id int NOT NULL AUTO_INCREMENT,
    event_name varchar(255) NOT NULL,
    event_description varchar(1000) NOT NULL,
    upcoming BOOL DEFAULT false,
    PRIMARY KEY (id)
);
