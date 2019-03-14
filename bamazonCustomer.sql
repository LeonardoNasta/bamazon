show databases;

DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
id integer not null auto_increment,
product_name varchar (50) not null,
department_name varchar (50) not null,
price integer default 0,
stock_quantity integer default 0,
primary key (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Astroworld by Travis Scott", 'Hip Hop', 11.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bailando by Enrique Iglesias", 'Latin', 1.99, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Despacito by Luis Fonzi feat. Daddy Yankee", 'Latin', 1.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Weezer by Weezer", 'Rock', 11.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shrek the Third Soundtrack", 'Soundtrack', 100.00, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Houses of the Holy by Led Zeppelin", 'Rock', 8.00, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kids See Ghosts by Kids See Ghosts", 'Hip Hop', 9.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pet Sounds by the Beach Boys", 'Pop', 9.99, 70);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Thriller by Michael Jackson", 'Pop', 8.99, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mirrors by Justin Timberlake", 'Pop', 9.99, 40);


















