import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = ({ links }: any) => {
  return (
    <footer className="w-full   bg-[#dfdfe1]">
      <div className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto  ">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-10">
          {links.map(({ title, links }: any) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-gray-900 uppercase dark:text-gray-100">
                {title}
              </h4>
              <div className="mt-3 grid space-y-3 text-sm">
                {links.map(({ name, href }: any) => (
                  <p key={name}>
                    <Link
                      className="hover:underline inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href={href}
                    >
                      {name}
                    </Link>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-5 mt-5 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row gap-2 justify-center sm:justify-between  items-center">
            <div className="flex items-center gap-x-3">
              <div className="space-x-4 text-sm ">
                © 2023 FastcashBack. All rights reserved.
              </div>
            </div>
            <div className="flex justify-between items-center gap-2 text-lg">
              <Link
                className="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                href="#"
              >
                <FaFacebookSquare />
              </Link>
              <Link
                className="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                href="#"
              >
                <FaSquareXTwitter />
              </Link>
              <Link
                className="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 rounded-full"
                href="#"
              >
                <FaLinkedin />
              </Link>
              <Link
                className="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                href="#"
              >
                <FaInstagramSquare />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
