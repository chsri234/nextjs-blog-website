import Link from "next/link";
const Logo = () => {
  return (
    <>
      <div className="logo">
        <h1 className="text-2xl md:text-3xl xl:text-4xl uppercase font-bold flex items-center text-purple-700 dark:text-purple-600 mx-6 my-2">
          <Link href="/">Tech Blog</Link>
        </h1>
      </div>
    </>
  );
};

export default Logo;