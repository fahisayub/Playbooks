import { Provider } from 'react-redux';
import store from '../store';
import { NextUIProvider, createTheme } from '@nextui-org/react';

const theme = createTheme({
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
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </Provider>
  );
}

export default MyApp;
