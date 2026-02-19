import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/navbar";
import HomePage from "@/pages/HomePage";
import DownloadPage from "@/pages/DownloadPage";
import ChangelogPage from "@/pages/ChangelogPage";
import NotFoundPage from "@/pages/NotFoundPage";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/changelog" element={<ChangelogPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
