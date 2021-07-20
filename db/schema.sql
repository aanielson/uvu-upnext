CREATE DATABASE IF NOT EXISTS events_db;
USE events_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS events;

-- Create the events table
CREATE TABLE events (
    id int NOT NULL AUTO_INCREMENT,
    event_name varchar(255) NOT NULL,
    event_date DATETIME NOT NULL,
    event_description varchar(1000) NOT NULL,
    upcoming BOOL DEFAULT TRUE,
    PRIMARY KEY (id)
);

CREATE DATABASE IF NOT EXISTS upnext_db;
USE upnext_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS upNext;

-- Create the events table
CREATE TABLE upNext (
    id int NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    summary varchar(255) NOT NULL,
    link varchar(15) NOT NULL,
    PRIMARY KEY (id)
);
