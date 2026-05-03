import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/createIcon.ts', 'src/icons/*.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  splitting: false,
  bundle: false,
  sourcemap: false,
  outDir: 'dist',
  target: 'es2022',
  external: ['react', 'react-native', 'react-native-svg'],
});
