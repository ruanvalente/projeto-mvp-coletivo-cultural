import { CookieProps, getCookie } from "@/utils/cookies";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const savedToken: CookieProps = getCookie("coletivo_cultural");
  useEffect(() => {
    if (!savedToken || !savedToken.token) {
      router.push("/login");
    }
  }, [router, savedToken]);

  return <div>Dashboard - {savedToken.user.aud}</div>;
}
