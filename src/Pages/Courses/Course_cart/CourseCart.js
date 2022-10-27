import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CourseCart = () => {
    const [courses, setCourses] = useState();
    useEffect(() => {
        fetch(`https://programmer-server.vercel.app/course`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                courses?.map(course => <p key={course.course_id}>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="p-2">
                            <img className='h-52 object-cover rounded-t-xl ' src={course.image} alt="" />
                            <div className='p-6'><h2 className="card-title">{course.course_title}</h2>
                                <p>{course.course_description.slice(0, 50)}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/courses/course/${course.course_id}`} ><button className="btn btn-primary">Detail</button></Link>
                                </div></div>
                        </div>
                    </div>
                </p>
                )}
        </div>
    );
};

export default CourseCart;