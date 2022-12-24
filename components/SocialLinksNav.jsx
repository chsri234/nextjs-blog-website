import Link from "next/link";
import { ImLinkedin2, ImGithub } from "react-icons/im";
const SocialLinksNav = (props) => {
  return (
    <>
      <li className={`mr-6 ${props.styleName}`}>
        <Link href="https://www.google.com" target="_blank">
          <ImLinkedin2 />
        </Link>
      </li>
      <li className={`mr-6 ${props.styleName}`}>
        <Link href="https://www.google.com" target="_blank">
          <ImGithub />
        </Link>
      </li>
      <li className={`${props.styleName}`}>
        <button
          type="button"
          className="btn-primary text-white bg-purple-700 hover:bg-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-500 dark:focus:ring-purple-900 "
        >
          Subscribe
        </button>
      </li>
    </>
  );
};

export default SocialLinksNav;
