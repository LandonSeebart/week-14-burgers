
/* Drops the todolist if it exists currently */
DROP DATABASE IF EXISTS burgers_db;

/* Creates the "burgers_db" database */
CREATE DATABASE burgers_db;

/* Use burgers_db for everything that follows */
USE burgers_db

/* Create Table and add values */

CREATE TABLE `burgers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(200) NOT NULL,
  `devoured` BOOLEAN,
  PRIMARY KEY (`id`));