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
            src="https://img.freepik.com/free-vector/data-science-programming_39422-1055.jpg?w=996&t=st=1673123901~exp=1673124501~hmac=e334753c8c55ef580ba019b291570dc26853071c933f50af3896247077f44a73"
            className="w-1/2 rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-semibold">Data Science</h1>
            <p className="py-6 text-xl">
              <span className="font-bold text-2xl">Course Mentor:</span>
              Md.Rakibul Islam.
              <p>
                Several workshops are available. You will get a certificate of
                achievement for each workshop after completing it. To reserve a
                spot, use the form below each workshop.
              </p>
              <span className="font-bold text-2xl">Course price:</span>$15 only
            </p>
            <button className="bg-blue-700 text-white rounded-md p-2">
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
