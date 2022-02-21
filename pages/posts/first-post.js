import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";
// import Script from "next/script";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>My post</title>
      </Head>
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
      <h1>First post</h1>
      <h2>
        <Link href="/">
          <a>Back to first page</a>
        </Link>
      </h2>
    </Layout>
  );
}
