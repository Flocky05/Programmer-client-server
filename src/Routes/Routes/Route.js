import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import CourseDetail from "../../Pages/Course-Detail/CourseDetail";
import Courses from "../../Pages/Courses/Courses";
import CourseCart from "../../Pages/Courses/Course_cart/CourseCart";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
import RunningCourse from "../../Pages/RunningCourse/RunningCourse";
import Login from "../../Pages/Shared/Login/Login";
import Register from "../../Pages/Shared/Register/Register";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        children: [
          {
            index: true,
            element: <CourseCart></CourseCart>,
          },
          {
            path: "/courses/course/:id",
            element: <CourseDetail></CourseDetail>,
            loader: ({ params }) =>
              fetch(`https://programmer-server.vercel.app/course/${params.id}`),
          },
        ],
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/RunningCourse",
        element: <RunningCourse></RunningCourse>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/checkOut",
        element: (
          <PrivetRoute>
            <CheckOut></CheckOut>
          </PrivetRoute>
        ),
      },
      {
        path: "/*",
        element: <PageNotFound></PageNotFound>,
      },
    ],
  },
]);
