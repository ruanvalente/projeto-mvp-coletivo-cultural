import { isEmptyObject } from "@/helpers/isEmptyObject";
import { GetServerSideProps } from "next";

export default function DashboardPage() {
  return <div>Dashboard</div>;
}

export const getServerSideProps: GetServerSideProps<any> = async (context) => {
  const userCookies = context.req.cookies ?? null;
  const hasEmptyCookies = isEmptyObject(userCookies);

  const userCookiesResponse = {
    token: JSON.parse(userCookies.coletivo_cultural as string),
  };

  if (hasEmptyCookies) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: userCookiesResponse,
    },
  };
};
