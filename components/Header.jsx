import Head from "next/head";
import Logo from "./Logo";
import Navbar from "./NavBar";
import SocialLinksNav from "./SocialLinksNav";

const Header = (props) => {
  return (
    <>
      <Head>
        <title>Blog Website</title>
        <meta
          name="description"
          content="A headless CMS blog website with focus on Front End"
        />
      </Head>
      <header className="header container mx-auto p-6 border-b-2">
        <nav className="flex justify-between items-center flex-col md:flex-row">
          <Logo />
          <Navbar />
          <div className="md:hidden py-2">
            <ul className="flex items-center justify-center">
              <SocialLinksNav styleName=''/>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
