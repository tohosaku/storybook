const config = {
  "stories": [
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],

  staticDirs: [
    '../public'
  ],

  "framework": {
    name: "@storybook/html-vite"
  },

  docs: {
    autodocs: true
  }
}

export default config
