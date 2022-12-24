import Link from "next/link";
import { ImLinkedin2, ImGithub } from "react-icons/im";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="footer container mx-auto p-6 border-t-2">
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div className="flex items-center mx-auto md:mx-0 pb-3 md:pb-0">
          <Logo />
        </div>

        <div className="mx-auto md:mx-0 pb-6 md:pb-0">
          <h3 className="uppercase font-bold item-center pb-3">Resources</h3>
          <ul>
            <li className="text-center">
              <Link href="https://www.google.com" target="_blank">
                NextJS
              </Link>
            </li>
            <li className="text-center">
              <Link href="https://www.google.com" target="_blank">
                Tailwind CSS
              </Link>
            </li>
            <li className="text-center">
              <Link href="https://www.google.com" target="_blank">
                Turbopack
              </Link>
            </li>
          </ul>
        </div>
        <div className="mx-auto md:mx-0 pb-6 md:pb-0">
          <h3 className="uppercase font-bold item-center pb-3">Follow Me</h3>
          <ul>
            <li className="">
              <Link
                href="https://www.google.com"
                target="_blank"
                className="flex justify-center items-center"
              >
                <ImGithub className="mr-3" />
                Github
              </Link>
            </li>
            <li>
              <Link
                href="https://www.google.com"
                target="_blank"
                className="flex justify-center items-center"
              >
                <ImLinkedin2 className="mr-3" />
                Linked In
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center mx-auto md:mx-0">
          <button
            type="button"
            className="btn-primary text-white bg-purple-700 hover:bg-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-500 dark:focus:ring-purple-900"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="border-t-2">
        <p className="my-6 text-center"> &copy; 2023 </p>
      </div>
    </footer>
  );
};

export default Footer;
