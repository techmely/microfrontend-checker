import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: {
      plugins: [
        new ModuleFederationPlugin({
          name: 'federation_consumer',
          remotes: {
            mf1_provider:
              'mf1_provider@http://localhost:3000/mf-manifest.json',
          },
          shared: ['react', 'react-dom', "@mui/material"],
        }),
      ],
    },
  },
});
