import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";

export default function RootLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[280px_1fr] font-serif">
      {/* Desktop sidebar */}
      <aside className="hidden lg:block sticky top-0 h-screen bg-sidebar border-r border-[#e8e2de] ">
        <Sidebar />
      </aside>

      {/* Mobile top bar */}
      <header className="lg:hidden sticky top-0 z-40 h-14 bg-white border-b border-gray-200 flex items-center gap-3 px-4">
        <button aria-label="Open menu" className="text-2xl" onClick={() => setOpen(true)}>☰</button>
        <div className="font-script text-accent text-xl">Jeff &amp; Theresa</div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40" onClick={() => setOpen(false)}>
          <nav className="absolute left-0 top-0 h-full w-[84vw] max-w-[320px] bg-sidebar border-r border-[#e8e2de]"
               onClick={(e) => e.stopPropagation()}>
            <button className="absolute right-4 top-3 text-2xl" aria-label="Close" onClick={() => setOpen(false)}>✕</button>
            <Sidebar onNavigate={() => setOpen(false)} />
          </nav>
        </div>
      )}

      {/* Routed pages */}
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}