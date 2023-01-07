import React from "react";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.freepik.com/free-photo/screen-with-white-color-put-your-text-there-group-young-people-casual-clothes-working-modern-office_146671-16524.jpg?w=996&t=st=1673117897~exp=1673118497~hmac=e07b12ce1e6349bd8ae1090569a47a31a176a69565633845e284966cc1065c10"
            className="w-2/3 rounded-lg shadow-2xl"
            alt=""
          />
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Let's start Programming with
              <br className="hidden md:block" />
              Programmer{" "}
            </h2>

            <div className="flex items-center">
              <Link
                to="/courses"
                className=" bg-blue-600 p-2 rounded-md text-white"
              >
                Get started
              </Link>
              <Link
                to="/faq"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 ml-3"
              >
                Learn more about us...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
