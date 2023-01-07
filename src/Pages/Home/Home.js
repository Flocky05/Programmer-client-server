import React from "react";
import FAQ from "../Blog/Blog";
import CourseCart from "../Courses/Course_cart/CourseCart";
import RunningCourse from "../RunningCourse/RunningCourse";
import TeamMember from "../TeamMember/TeamMember";
import TourBlog from "../TourBlog/TourBlog";
import UpCommingCourses from "../UpCommingCourses/UpCommingCourses";
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
      <div>
        <h2 className="text-3xl font-bold p-2 text-center">
          Blogs about Other's Topics
        </h2>
        <TourBlog></TourBlog>
      </div>
      <RunningCourse></RunningCourse>
      <UpCommingCourses></UpCommingCourses>
    </div>
  );
};

export default Home;
