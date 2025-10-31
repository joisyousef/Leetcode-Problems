select 
    s.student_id,
    s.student_name,
    sub.subject_name,
    (
        select count(*)
        from Examinations e
        where e.student_id = s.student_id
        and e.subject_name = sub.subject_name
    ) as attended_exams
from students s
cross join Subjects sub
order by s.student_id, sub.subject_name