// Additional ESBuild configuration for Windows stability
module.exports = {
  target: 'es2020',
  format: 'esm',
  keepNames: true,
  treeShaking: true,
  minifyIdentifiers: false,
  minifySyntax: true,
  minifyWhitespace: true,
  loader: {
    '.js': 'jsx',
    '.ts': 'tsx'
  },
  // Prevent service crashes on Windows
  logLevel: 'warning',
  logLimit: 0
}
