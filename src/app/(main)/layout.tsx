import React from "react";
import NavbarMain from "@/components/custom/navbar-main";
import Footbar from "@/components/custom/footbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarMain />
      <main className="flex-grow">
        <div className="max-w-full flex justify-center items-center">
          {children}
        </div>
      </main>
      <Footbar />
    </div>
  );
}
