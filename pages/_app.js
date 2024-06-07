import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import { NextUIProvider } from '@nextui-org/react';

const theme = {
  type: 'light', // or 'dark'
  theme: {
    colors: {
      primary: '#0070f3',
      secondary: '#1c1c1e',
      success: '#4caf50',
      warning: '#ff9800',
      error: '#f44336',
    },
    space: {},
    fonts: {},
  },
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(
          (registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
          },
          (error) => {
            console.log('Service Worker registration failed:', error);
          }
        );
      });
    }
  }, []);

  return (
    <Provider store={store}>
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </Provider>
  );
}

export default MyApp;
