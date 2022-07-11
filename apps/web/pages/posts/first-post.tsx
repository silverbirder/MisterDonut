import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

const FirstPost = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Image
        src="/images/misterdonut.jpeg"
        height={144}
        width={144}
        alt="misterdonut"
      />
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
    </>
  );
};

export default FirstPost;
