import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Custom plugin to allow raw import of .md files
const markdownRawLoader = {
  name: 'markdown-raw-loader',
  transform(src, id) {
    if (id.endsWith('.md')) {
      return `export default ${JSON.stringify(src)}`
    }
  }
};

export default defineConfig({
  plugins: [react(), markdownRawLoader]
});
