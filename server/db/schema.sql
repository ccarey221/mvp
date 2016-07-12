DROP DATABASE lost;
CREATE DATABASE lost;

USE lost;

CREATE TABLE user (
  id INTEGER AUTO_INCREMENT,
  username VARCHAR(16),
  name VARCHAR(25),
  password VARCHAR(255),
  email VARCHAR(30),
  PRIMARY KEY (id)
);

-- add a picture field to lostItem table in future, difficult for now
CREATE TABLE lostItem (
  id INTEGER AUTO_INCREMENT,
  user_id INTEGER,
  keyword VARCHAR(25),
  description VARCHAR(250),
  reward INTEGER,
  createdAt DATE,
  PRIMARY KEY(id)
  FOREIGN KEY(user_id) REFERENCES user(id),
);