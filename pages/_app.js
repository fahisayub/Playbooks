import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import { NextUIProvider } from '@nextui-org/react';
import { messaging } from '../firebase';

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
  console.log('MyApp component is running');

  useEffect(() => {
    console.log('useEffect triggered');
    if ('serviceWorker' in navigator) {
      console.log('Service Worker is supported');
      window.addEventListener('load', () => {
        console.log('Window load event triggered');
        navigator.serviceWorker.register('/service-worker.js').then(
          (registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
          },
          (error) => {
            console.log('Service Worker registration failed:', error);
          }
        ).catch((error) => {
          console.log('Service Worker registration encountered an error:', error);
        });
      });
    } else {
      console.log('Service Worker is not supported');
    }

    // Request permission for push notifications
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        messaging.getToken().then((token) => {
          console.log('FCM Token:', token);
          // Send the token to your server to save it and use it to send push notifications
        }).catch((error) => {
          console.log('Error getting FCM token:', error);
        });
      } else {
        console.log('Notification permission denied.');
      }
    }).catch((error) => {
      console.log('Error requesting notification permission:', error);
    });

    // Handle incoming messages when the app is in the foreground
    messaging.onMessage((payload) => {
      console.log('Message received. ', payload);
      // Customize notification here
      const notificationTitle = payload.notification.title;
      const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-logo.png'
      };

      if (Notification.permission === 'granted') {
        new Notification(notificationTitle, notificationOptions);
      }
    });
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
