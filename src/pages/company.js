import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Company(props) {
  const router = useRouter();

  useEffect(() => {
    // 이전 페이지 확인
    if (
      !router.asPath.startsWith("/company") ||
      !props.referrer ||
      !props.referrer.startsWith("https://localhost:3000")
    ) {
      //"/company"로 갔을 때 돌아갈 경로
      router.push("/");
    }
  }, []);

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-lime-200">
        <main className="max-w-lg p-4 bg-white rounded-lg shadow-lg cursor-pointer">
          <h1>Company Page</h1>
        </main>
      </div>
    </>
  );
}

// export async function getServerSideProps(context) {
//   // 인증 정보 확인
//   const isLoggedIn = true; // 로그인 여부 체크

//   if (!isLoggedIn) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   // 이전 페이지 정보
//   const { req } = context;
//   const referrer = req.headers.referer || null;
//   const props = { referrer };

//   return {
//     props,
//   };
// }
