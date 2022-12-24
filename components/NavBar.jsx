import Link from "next/link";
import SocialLinksNav from "./SocialLinksNav";

const Navbar = () => (
  <div className="links py-2">
    <ul className="flex items-center justify-center">
      <li className="mr-6">
        <Link href="/blogs">Blogs</Link>
      </li>
      <li className="mr-6">
        <Link href="/about">About</Link>
      </li>
      <li className="md:mr-6">
        <Link href="/contact">Contact</Link>
      </li>
      <SocialLinksNav styleName="hidden md:block" />
    </ul>
  </div>
);

export default Navbar;
