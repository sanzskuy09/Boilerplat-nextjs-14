"use client";
import Image from "next/image";
import { useDispatch, useSelector, useStore } from "react-redux";

import ReduxProvider from "./StoreProvider";

import TemplatePage from "@/template/page";

export default function Home() {
  return (
    <ReduxProvider>
      <TemplatePage />
    </ReduxProvider>
  );
}
