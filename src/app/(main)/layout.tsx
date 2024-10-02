import React from 'react';
import NavbarMain from '@/components/custom/navbar-main';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarMain />
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}