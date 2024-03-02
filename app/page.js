"use client";

import TemplatePage from "@/template/page";
import LoginPage from "./login/pages";

import { useAppSelector } from "@/libs/hook";

export default function Home() {
  const authUser = useAppSelector((state) => state?.auth?.isLogin ?? false);
  // console.log(authUser);

  return authUser ? <TemplatePage /> : <LoginPage />;
}
