INSERT INTO department (
 departmentname
) VALUES (
  "HR"
),
(
  "IT"
),
(
  "Finance"
),
(
  "Marketing"
);


-- Table role
INSERT INTO role (
 title,
 salary,
 department_id
) VALUES (
  "Junior Analyst",
  1500,
  3
),
(
  "Senior Analyst",
   2000,
   3
),
(
  "Marketing Manager",
  3000,
  4
),
(
  "IT Support",
  2500,
  2
),
( 
  "HR Assistant",
  2000,
  1
);


INSERT INTO employee (
 first_name,
 last_name,
 role_id,
 manager_id
) VALUES (
  "Bob",
  "Smith",
  1,
  NULL
),
(
  "Bob",
  "Holyhead",
  2,
  NULL
),
(
  "Jane",
  "Smith",
  1,
  NULL
),
(
  "Hannah",
  "Smith",
  3,
  NULL
),
( 
   "Hannah",
  "Holyhead",
  5,
  NULL
);

UPDATE employee
SET manager_id = 4
WHERE id = 1;

UPDATE employee
SET manager_id = 4
WHERE id = 3;

UPDATE employee
SET manager_id = 4
WHERE id = 4;