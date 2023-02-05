import React from "react";

const UpCommingCourses = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center p-3">
        Up Comming Course...
      </h2>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="w-1/2 rounded-lg shadow-2xl hover:scale-110 duration-1000 transition-all"
            alt=""
          />
          <div className="p-8">
            <h1 className="text-4xl font-semibold">Data Science</h1>
            <p className="py-6 text-xl">
              <span className="font-semibold text-2xl">Course Mentor:</span>
              Md.Rakibul Islam.
              <p>
                Several workshops are available. You will get a certificate of
                achievement for each workshop after completing it. To reserve a
                spot, use the form below each workshop.
              </p>
              <span className="font-semibold text-2xl ">Course price:</span>
              <span className="">$</span>150 only
            </p>
            <button className="bg-blue-700 text-white rounded-md px-4 py-2 mb-2">
              Learn More
            </button>
            <p>Enrol last time:</p>
            <div>
              <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 15 }}></span>
                  </span>
                  days
                </div>
                <div className="flex flex-col">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 10 }}></span>
                  </span>
                  hours
                </div>
                <div className="flex flex-col">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 24 }}></span>
                  </span>
                  min
                </div>
                <div className="flex flex-col">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 0 }}></span>
                  </span>
                  sec
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpCommingCourses;
