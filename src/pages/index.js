import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <title>Hello, World!</title>
        <link rel="icon" href="/favicon.ico" />
        <main className="max-w-lg p-4 bg-white rounded-lg shadow-lg">
          <h1 className="mb-4 text-2xl font-bold">Hello, World!</h1>
          <p className="text-gray-800">
            <a href="/main">Main Page</a>
          </p>
          <p className="text-gray-800">
            <a href="/login">Login Page</a>
          </p>
          <p className="text-gray-800">
            <a href="/recruit">Recruit Page</a>
          </p>
          <p className="text-gray-800">
            <a href="/company">Company Page</a>
          </p>
        </main>
      </div>
    </>
  );
}
