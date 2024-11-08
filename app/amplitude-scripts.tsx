'use client';

import Script from 'next/script';
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

const AmplitudeScripts = () => (
  <>
    <Script
      id="amplitude-script"
      src={`https://cdn.amplitude.com/script/${AMPLITUDE_API_KEY}.js`}
      onLoad={() => {
        window.amplitude.init(AMPLITUDE_API_KEY, {
          fetchRemoteConfig: true,
          autocapture: true,
        });
      }}
    />
  </>
);

export default AmplitudeScripts;
