import * as React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export interface ILayoutProps {
  children: any;
}

export function Layout(props: ILayoutProps) {
  const { children } = props;

  return (
    <div className="flex flex-col min-h-screen relative bg-slate-900">
      <Header />
      <main className="flex-1 bg-yellow-400 mt-16 mb-6 p-6 md:pt-6 md:w-2/3 md:mx-auto md:text-2xl">
        {children}
      </main>
      <Footer />
    </div>
  );
}
