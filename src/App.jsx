import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import RootLayout from "./layouts/RootLayout.jsx";

// Lazy pages
const Home          = lazy(() => import("./pages/Home.jsx"));
// const Couple        = lazy(() => import("./pages/Couple.jsx"));
// const Story         = lazy(() => import("./pages/Story.jsx"));
// const Friends       = lazy(() => import("./pages/Friends.jsx"));
// const Organization  = lazy(() => import("./pages/Organization.jsx"));
// const Gallery       = lazy(() => import("./pages/Gallery.jsx"));
// const WhenWhere     = lazy(() => import("./pages/WhenWhere.jsx"));
// const Rsvp          = lazy(() => import("./pages/Rsvp.jsx"));
// const Registry      = lazy(() => import("./pages/Registry.jsx"));
// const Blog          = lazy(() => import("./pages/Blog.jsx"));
// const NotFound      = lazy(() => import("./pages/NotFound.jsx"));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="p-8 text-center">Loading…</div>}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            {/* <Route path="couple" element={<Couple />} />
            <Route path="story" element={<Story />} />
            <Route path="friends" element={<Friends />} />
            <Route path="organization" element={<Organization />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="when-where" element={<WhenWhere />} />
            <Route path="rsvp" element={<Rsvp />} />
            <Route path="registry" element={<Registry />} />
            <Route path="blog" element={<Blog />} /> */}
          </Route>

          {/* Legacy hash/unknown paths -> home */}
          <Route path="home" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
