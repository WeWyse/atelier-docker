ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'mypassword';
flush privileges;
CREATE DATABASE mydb2;
USE mydb2;
CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255));
