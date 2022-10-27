import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const data = useLoaderData()
    const ins = data.course_instraction.split('🔥')
    console.log(ins);
    return (
        <div className='w-full max-w-3xl mx-auto '>
            <img className='w-full max-w-3xl rounded-lg shadow-lg mx-auto' src={data.image} alt="" />
            <h2 className='text-4xl font-semibold my-4'>{data.course_title}</h2>
            <p>{data.course_description}</p>
            <h2 className='text-xl my-2'>Course Instractor:<span className='text-xl font-semibold'>{data.course_instractor}</span></h2>
            {
                ins.map(el => <p key={el}>🔥 {el}</p>)
            }
            <Link className='btn btn-primary p-2 rounded-lg my-8' to='/login'>Get premium access</Link>
        </div>

    );
};

export default CourseDetail;