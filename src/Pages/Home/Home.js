import React from "react";
import FAQ from "../Blog/Blog";
import CourseCart from "../Courses/Course_cart/CourseCart";
import TeamMember from "../TeamMember/TeamMember";
import HomeHeader from "./HomeHeader";

const Home = () => {
  return (
    <div>
      <HomeHeader></HomeHeader>
      <FAQ></FAQ>
      <div className="p-20 m-12">
        <h2 className="text-3xl text-center p-2">
          Courses that you can enjoy with us
        </h2>
        <CourseCart></CourseCart>
      </div>
      <TeamMember></TeamMember>
    </div>
  );
};

export default Home;
