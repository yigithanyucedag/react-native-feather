module.exports = {
  ext: 'tsx',
  prettierConfig: {
    parser: 'typescript',
  },
  jsx: {
    babelConfig: {
      plugins: [
        // xmlns is not typed correctly
        [
          '@svgr/babel-plugin-remove-jsx-attribute',
          {
            elements: ['Svg'],
            attributes: ['xmlns', 'className'],
          },
        ],
      ],
    },
  },
}