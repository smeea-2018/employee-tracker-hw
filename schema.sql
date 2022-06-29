
DROP DATABASE IF EXISTS employee_tracker;

CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE department (
id INT AUTO_INCREMENT PRIMARY KEY,
departmentname VARCHAR(250) NOT NULL
);

CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(250) NOT NULL,
salary DECIMAL(10,5) NOT NULL,
department_id INT NOT NULL,
FOREIGN KEY (department_id) REFERENCES department(id),
PRIMARY KEY (id)
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(250) NOT NULL,
last_name VARCHAR(250) NOT NULL,
role_id INT NOT NULL,
manager_id INT ,
FOREIGN KEY (role_id) REFERENCES role(id),
FOREIGN KEY (manager_id) REFERENCES employee(id),
PRIMARY KEY (id)
);
-- * 
-- `department`

--     * `id`: `INT PRIMARY KEY`

--     * `name`: `VARCHAR(30)` to hold department name

-- * `role`

--     * `id`: `INT PRIMARY KEY`

--     * `title`: `VARCHAR(30)` to hold role title

--     * `salary`: `DECIMAL` to hold role salary

--     * `department_id`: `INT` to hold reference to department role belongs to

-- * `employee`

--     * `id`: `INT PRIMARY KEY`

--     * `first_name`: `VARCHAR(30)` to hold employee first name

--     * `last_name`: `VARCHAR(30)` to hold employee last name

--     * `role_id`: `INT` to hold reference to employee role

--     * `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)