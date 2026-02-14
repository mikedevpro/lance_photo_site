import { Suspense } from "react";
import { q } from "@/lib/wp";
import PortfolioClient from "./portfolio-client";

export const metadata = {
  title: "Portfolio | Lance Larson Photography",
};

export default async function PortfolioPage() {
  const items = await q.galleries();
  return (
    <Suspense fallback={<section className="py-10" />}>
      <PortfolioClient items={items} />
    </Suspense>
  );
}
