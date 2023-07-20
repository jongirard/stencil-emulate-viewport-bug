import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'bug-demo',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
    emulate: [
      {
        viewport: {
          width: 1250,
          height: 600,
        },
      }
    ]
  },
};
