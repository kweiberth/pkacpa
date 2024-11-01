'use client';

import Script from 'next/script';

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
      src="https://cdn.amplitude.com/script/832ee5a3cdefc047a9ed89935f9fc3ea.js"
      onLoad={() => {
        window.amplitude.init('832ee5a3cdefc047a9ed89935f9fc3ea', {
          fetchRemoteConfig: true,
          autocapture: true,
        });
      }}
    />
  </>
);

export default AmplitudeScripts;
