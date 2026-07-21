-- Write your PostgreSQL query statement below
select firstName, lastName, city, state
From Person
left join Address on Person.personId = Address.personId;