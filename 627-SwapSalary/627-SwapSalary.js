# Write your MySQL query statement below
UPDATE Salary
SET sex = ELT(3 - FIELD(sex, 'm', 'f'), 'm', 'f');
