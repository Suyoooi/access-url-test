// import Head from 'next/head'

const Main = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-stone-400">
      <title>Hello, World!</title>
      <link rel="icon" href="/favicon.ico" />
      <main className="max-w-lg p-4 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-2xl font-bold">Hello, World!</h1>
        <p className="text-gray-800">
          This is an example page using Next.js and Tailwind CSS.
        </p>
      </main>
    </div>
  );
};

export default Main;
