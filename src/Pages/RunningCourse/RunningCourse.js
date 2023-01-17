import React from "react";

const RunningCourse = () => {
  return (
    <div className="px-10">
      <h2 className=" text-3xl font-bold text-center text-gray-700 p-4 ">
        Running Courses are..
      </h2>
      <div className="carousel w-full h-screen">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901789.jpg?w=996&t=st=1673123009~exp=1673123609~hmac=648fc68038b641a84da68281113e27b7dd46e55867a1e17981c3b14f76e9d2ae"
            className="w-full h-[40rem]"
            alt=""
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/data-center-with-server-racks-corridor-room-3d-render-digital-data-cloud-technology_482257-27722.jpg?w=996&t=st=1673122731~exp=1673123331~hmac=936b14768c2ea6bb0db297b34ad57ac307b061ca7d6badd4ad4ab7d9bbf4856d"
            className="w-full h-[40rem]"
            alt=""
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/programmer-scanning-screen-his-smartwatch-with-smartphone-camera_1098-18710.jpg?w=996&t=st=1673122945~exp=1673123545~hmac=de6f7bdc2d5ecf85ff994f910a801e0edf38866875f9a72c0c26a2d276290d3e"
            className="w-full h-[40rem]"
            alt=""
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/focus-software-developer-hands-typing-source-code-keyboard-while-looking-computer-screens-with-programming-interface-programer-sitting-desk-with-clipboard-writing-algorithm_482257-43990.jpg?w=1060&t=st=1673122982~exp=1673123582~hmac=1f33e8eca73d4447e3bbaddd2cb7c7639f7e9ae5e15ce38d556347e63b6c28f6"
            className="w-full h-[40rem]"
            alt=""
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunningCourse;
