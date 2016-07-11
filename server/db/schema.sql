CREATE DATABASE lost;

CREATE TABLE user (
  id INTEGER AUTO_INCREMENT,
  username VARCHAR(16),
  name VARCHAR(25),
  password VARCHAR(255),
  email VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE lostItem (
  id INTEGER,
  FOREIGN KEY (user_id) REFERENCES user(id),
  keyword VARCHAR(25),
  description VARCHAR(250),
  image blob not null,
  PRIMARY KEY (id)
);