import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const data = useLoaderData()
    const ins = data.course_instraction.split('🔥')
    console.log(ins);
    return (
        <div>
            <img className='' src={data.image} alt="" />
            <h2 className='text-4xl font-semibold'>{data.course_title}</h2>
            <p>{data.course_description}</p>
            <h2>Course Instractor:<span className='text-xl font-semibold'>{data.course_instractor}</span></h2>
            {
                ins.map(el => <p key={el}>🔥 {el}</p>)
            }
        </div>

    );
};

export default CourseDetail;