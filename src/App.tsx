import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ProgramsPage } from "@/pages/ProgramsPage";
import { SchoolLifePage } from "@/pages/SchoolLifePage";
import { AdmissionPage } from "@/pages/AdmissionPage";
import { ContactPage } from "@/pages/ContactPage";
import { NewsPage } from "@/pages/NewsPage";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/despre" element={<AboutPage />} />
          <Route path="/programe" element={<ProgramsPage />} />
          <Route path="/viata-scolara" element={<SchoolLifePage />} />
          <Route path="/admitere" element={<AdmissionPage />} />
          <Route path="/noutati" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
