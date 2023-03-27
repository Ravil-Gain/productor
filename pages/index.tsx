import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Productor</title>
        <meta name="description" content="This is an Productor App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="w-full m-auto md:w-2/3 text-center">
          <h1 className="text-4xl pb-8"> Please Login to proceed.</h1>
          <div>
            Authentication with Google, Without additional permissions, it will
            give us only your <strong>Email</strong> and <strong>Google display name</strong>. Which I
            promise to not save anywhere.
          </div>
        </div>
      </main>
    </div>
  );
}