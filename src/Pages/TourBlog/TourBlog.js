import React from "react";

export const TourBlog = () => {
  return (
    <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-lg hover:shadow-2xl">
          <img
            src="https://img.freepik.com/free-photo/group-friends-relaxing-park-after-bicycle-riding_613910-137.jpg?w=360&t=st=1673121635~exp=1673122235~hmac=9283c7be83867857e09afddd2b3e2eb6a783dc2a0d10f1e5c6a5604bad52f0f2"
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </a>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Visit the East
            </a>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-lg hover:shadow-2xl">
          <img
            src="https://img.freepik.com/free-photo/one-male-two-female-relaxing-park-after-riding-with-bicycles_613910-7892.jpg?w=996&t=st=1673121609~exp=1673122209~hmac=4f231ab44413679c1e4a2eb502b7c2b57e052b518a30c3d2e660f36f7c887e6b"
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </a>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Simple is better"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Simple is better
            </a>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-lg hover:shadow-2xl">
          <img
            src="https://img.freepik.com/free-photo/friends-having-fun-while-traveling_52683-88085.jpg?w=996&t=st=1673121549~exp=1673122149~hmac=77e258d3d67f0a41e33d416707b9d1c7650d96c64925a3a5c3be04e1844fa5a2"
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </a>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Film It!"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Film It!
            </a>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourBlog;
