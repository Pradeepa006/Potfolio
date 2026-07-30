import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import { useAnalytics } from './hooks/useAnalytics';
import { ThemeProvider } from './context/ThemeContext';

function AnalyticsWrapper() {
  useAnalytics();
  return null;
}

function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <Router>
          <AnalyticsWrapper />
          <CustomCursor />
          <ScrollProgress />
          <div className="flex flex-col min-h-screen text-slate-200 selection:bg-primary/30 selection:text-white">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
