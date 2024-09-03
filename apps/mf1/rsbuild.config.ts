import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  dev: {
    assetPrefix: true,
  },
  tools: {
      rspack: {
       output: {
         // You need to set a unique value that is not equal to other applications
         uniqueName: 'federation_provider'
       },
       plugins: [
         new ModuleFederationPlugin({
           name: 'federation_provider',
           exposes: {
             './button': './src/button.tsx',
           },
           shared: ['react', 'react-dom'],
         }),
       ],
     },
   },
});
