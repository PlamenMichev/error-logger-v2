// translation
import './locales/i18n';

// scroll bar
import 'simplebar/src/simplebar.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// contexts
import { CollapseDrawerProvider } from './contexts/CollapseDrawerContext';

//
import App from './App';
import CustomLocalizationProvider from './contexts/LocalizationProvider';

// ----------------------------------------------------------------------
const root = document.getElementById('root');

if (root) {
  root.setAttribute('notranslate', 'true');
}

ReactDOM.render(
  <HelmetProvider>
    <CollapseDrawerProvider>
      <BrowserRouter>
        <CustomLocalizationProvider>
          <App />
        </CustomLocalizationProvider>
      </BrowserRouter>
    </CollapseDrawerProvider>
  </HelmetProvider>,
  root
);
