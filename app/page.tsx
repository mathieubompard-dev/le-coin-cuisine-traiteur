"use client";

import { useTranslation } from "react-i18next";
import { Carousel } from "./components/Carousel";
import Card from "./components/Card";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="mx-auto flex w-full flex-col gap-12 p-6">
      {/* <section className="w-full"> */}
      <Carousel />
      {/* </section> */}

      <section>
        <Card className="grid gap-6">
          <p className="dark:text-slate-300 font-bold">
            {t("home.section1Text")}
          </p>
          <p className="dark:text-slate-300 font-bold">
            {t("home.section2Text")}
          </p>
          <p className="dark:text-slate-300 font-bold">
            {t("home.section3Text")}
          </p>
          <p className="dark:text-slate-300 font-bold">
            {t("home.section4Text")}
          </p>
        </Card>
      </section>
    </main>
  );
}
