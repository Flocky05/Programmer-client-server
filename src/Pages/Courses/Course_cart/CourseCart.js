import React, { useEffect, useState } from 'react';

const CourseCart = () => {
    const [courses, setCourses] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/course`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                courses?.map(course => <p key={course.course_id}>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <img className='h-56 object-cover' src={course.image} alt="" />
                            <h2 className="card-title">{course.course_title}</h2>
                            <p>{course.course_description.slice(0, 50)}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Detail</button>
                            </div>
                        </div>
                    </div>
                </p>
                )}
        </div>
    );
};

export default CourseCart;