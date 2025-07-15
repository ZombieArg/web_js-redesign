import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useNavigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';
import './i18n';

// Component to handle SPA routing redirects
function RedirectHandler({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if we have a redirect parameter (from 404.html)
    const urlParams = new URLSearchParams(location.search);
    const redirectPath = urlParams.get('redirect');
    
    if (redirectPath) {
      // Remove the redirect parameter and navigate to the intended path
      navigate(redirectPath, { replace: true });
    }
  }, [navigate, location]);

  return <>{children}</>;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <RedirectHandler>
          <App />
        </RedirectHandler>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);