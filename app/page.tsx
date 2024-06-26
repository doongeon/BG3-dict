"use client";

import { Suspense } from "react";
import TableSection from "../components/TableSection";
import Filter from "../components/Filter";
import Head from "next/head";

export default function Page() {
  return (
    <div className="w-full flex flex-col gap-10 items-center">
      <Filter />
      <div className="bg-neutral-500 h-px max-w-screen-sm w-full" />
      <Suspense>
        <TableSection />
      </Suspense>
    </div>
  );
}
