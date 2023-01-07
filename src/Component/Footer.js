import { a } from "react-router-dom";
import img1 from "../images/twitter.png";
import img2 from "../images/instagram.png";
import img3 from "../images/facebook.png";

export const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auhref sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-3xl" href="/">
              <img
                className="w-8"
                src="https://cdn-icons-png.flaticon.com/512/1336/1336494.png"
                alt=""
              />{" "}
              <span className="ml-2">Programmer</span>
            </a>
          </div>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, hreftam rem aperiam.
            </p>
            <p className="mt-4 text-sm text-gray-800">
              Eaque ipsa quae ab illo invenhrefre veritatis et quasi
              architechref beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              +8801799622217
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href="mailhref:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              md.rakibul.islam.0501@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Bhuapur, Tangail, Dhaka.
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="https://www.linkedin.com/in/rakibulislam2527/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              target="blank"
            >
              <img src={img1} alt="" className="w-10" />
            </a>
            <a
              href="https://www.instagram.com/rakibul_01islam/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              target="blank"
            >
              <img src={img2} alt="" className="w-10" />
            </a>
            <a
              href="https://www.facebook.com/rakibulislam2527"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              target="blank"
            >
              <img src={img3} alt="" className="w-10" />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Bacon ipsum dolor amet short ribs pig sausage prosciuthref chicken
            spare ribs salami.
          </p>
        </div>
      </div>
    </div>
  );
};
