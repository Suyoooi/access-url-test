import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1>Main 화면</h1>
      <Link href="/main">
        <p>test 화면</p>
      </Link>
      {/* <Link href="/detail">
        <p>여행지 상세 페이지</p>
      </Link> */}
    </>
  );
}
