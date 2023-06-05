// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { ProgressBarStyle } from './components/ProgressBar';
import MotionLazyContainer from './components/animate/MotionLazyContainer';
import ThemeLocalization from './contexts/ThemeProvider';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <MotionLazyContainer>
      <ThemeProvider>
        <ThemeLocalization>
          <ProgressBarStyle />
          <ScrollToTop />
          <Router />
        </ThemeLocalization>
      </ThemeProvider>
    </MotionLazyContainer>
  );
}
