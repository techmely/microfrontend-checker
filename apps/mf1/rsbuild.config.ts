import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  dev: {

  },
  tools: {
    rspack: {
      output: {
        // You need to set a unique value that is not equal to other applications
        uniqueName: 'mf1_provider'
      },
      plugins: [
        new ModuleFederationPlugin({
          name: 'mf1_provider',
          exposes: {
            './Button': './src/Button.tsx',
          },
          shared: ['react', 'react-dom', "@mui/material"],
        }),
      ],
    },
  },
});
