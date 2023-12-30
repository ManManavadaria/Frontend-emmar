import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const COVER = React.lazy(() => import("pages/COVER"));
const Projects = React.lazy(() => import("pages/Projects"));
const Services = React.lazy(() => import("pages/Services"));
const PrivacyPolicy = React.lazy(() => import("pages/PrivacyPolicy"));
const TermsofService = React.lazy(() => import("pages/TermsofService"));
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contacts" element={<ContactUs />} />
          <Route path="/termsofservice" element={<TermsofService />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cover" element={<COVER />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
