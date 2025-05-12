import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react';
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import { useAnalytics } from "./utils/analytics";

function App() {
  useAnalytics();
  const { data: visitorData, isLoading, error, getData } = useVisitorData(
    { extendedResult: true },
    { immediate: true }
  );

  // You can use the visitor data in your application
  // For example, you could log it or use it for analytics
  if (visitorData) {
    console.log('Visitor ID:', visitorData.visitorId);
  }

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (error) {
    console.error('Fingerprint error:', error);
  }

  return (
    <BrowserRouter>
      <div className="fixed bottom-4 right-4 z-50">
        <button 
          onClick={() => getData({ ignoreCache: true })}
          className="bg-neutral-900 text-white px-4 py-2 rounded-md text-sm hover:bg-neutral-800 transition-colors"
        >
          Reload Visitor Data
        </button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
