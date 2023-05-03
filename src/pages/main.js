// import Head from 'next/head'

const Main = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <title>Hello, World!</title>
      <link rel="icon" href="/favicon.ico" />
      <main className="max-w-lg p-4 rounded-lg shadow-lg bg-white">
        <h1 className="text-2xl font-bold mb-4">Hello, World!</h1>
        <p className="text-gray-800">
          This is an example page using Next.js and Tailwind CSS.
        </p>
      </main>
    </div>
  );
};

export default Main;
