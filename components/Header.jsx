import Head from "next/head";

const Header = () => {
  return (
    <>
      <Head>
        <title>Blog Website</title>
        <meta name="description" content="A headless CMS blog website with focus on Front End" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <h1>This is header</h1>
    </>
  );
}

export default Header;
