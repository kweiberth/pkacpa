'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { AMPLITUDE_API_KEY } from '@/utils/analytics';

declare global {
  interface Window {
    amplitude: {
      init: (
        apiKey: string,
        config?: { fetchRemoteConfig: boolean; autocapture: boolean },
      ) => void;
      getDeviceId: () => string;
    };
  }
}

const AmplitudeScripts = () => {
  const pathname = usePathname();

  if (pathname === '/qbo-app-terms' || pathname === '/qbo-app-privacy') {
    return null;
  }

  return (
    <Script
      id="amplitude-script"
      src="https://cdn.amplitude.com/libs/analytics-browser-2.11.7-min.js.gz"
      onLoad={() => {
        window.amplitude.init(AMPLITUDE_API_KEY, {
          fetchRemoteConfig: true,
          autocapture: true,
        });
      }}
    />
  );
};

export default AmplitudeScripts;
