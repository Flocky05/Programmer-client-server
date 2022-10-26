import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/course`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h2>THis is Courses page , there are only {courses.length} course</h2>
            <div>
                {
                    courses.map(course => <p key={course.course_id}>
                        <Link> {course.course_title}</Link>
                    </p>)
                }
            </div>

        </div >
    );
};

export default Courses;