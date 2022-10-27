import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import CourseCart from './Course_cart/CourseCart';

const Courses = () => {
    const [courses, setCourses] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/course`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='container mx-auto p-4'>
            <h2>THis is Courses page , there are only {courses?.length} course</h2>
            <div className='grid grid-cols-12'>


                <div className='col-span-full sm:col-span-3'>
                    {
                        courses?.map(course => <p key={course.course_id}>
                            <Link> {course.course_title}</Link>
                        </p>)
                    }
                </div>
                <div className='col-span-full sm:col-span-9'>
                    <Outlet></Outlet>
                </div>
            </div>

        </div >
    );
};

export default Courses;