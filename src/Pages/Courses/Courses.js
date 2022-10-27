import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import CourseCart from './Course_cart/CourseCart';

const Courses = () => {
    const [courses, setCourses] = useState();
    useEffect(() => {
        fetch(`https://programmer-server.vercel.app/course`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='w-full md:w-5/6 mx-auto p-4 '>

            <div className='grid grid-cols-12'>


                <div className='col-span-full sm:col-span-3 space-y-3 text-lg font-semibold tracking-wider sticky top-32 h-max '>
                    <h2>THis is Courses page , there are only {courses?.length} course</h2>
                    {
                        courses?.map(course => <p key={course.course_id}>
                            <Link to={`/courses/course/${course.course_id}`}> {course.course_title}</Link>
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